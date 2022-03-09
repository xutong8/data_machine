"use strict";
exports.__esModule = true;
var constants_1 = require("@/constants");
var files_1 = require("./files");
var node_xlsx_1 = require("node-xlsx");
var fs_1 = require("fs");
var path_1 = require("path");
var random_mock_1 = require("random-mock");
var rule_1 = require("./rule");
var mock = function () {
    var datasets = [];
    files_1["default"].forEach(function (file) {
        var dataset = {};
        var sheetname = file.sheetname;
        var objectIndices = [];
        function cast_attributes(fields) {
            return fields.map(function (field, index) {
                if (field.type === constants_1.FieldType.Object)
                    objectIndices.push(index);
                return {
                    name: field.name,
                    type: field.type === constants_1.FieldType.Continuous
                        ? random_mock_1.AttributeType.Continuous
                        : field.type === constants_1.FieldType.Date
                            ? random_mock_1.AttributeType.Date
                            : field.type === constants_1.FieldType.Object
                                ? random_mock_1.AttributeType.Compound
                                : random_mock_1.AttributeType.Discrete,
                    distribution: field.type === constants_1.FieldType.Continuous
                        ? new random_mock_1.Distribution.Continuous.Uniform(field.range)
                        : field.type === constants_1.FieldType.Date
                            ? new random_mock_1.Distribution.Date.Uniform(field.range, "YYYY/MM/DD HH:mm")
                            : field.type === constants_1.FieldType.Object
                                ? new random_mock_1.Distribution.Compound({
                                    attributes: cast_attributes(field.fields),
                                    rules: []
                                })
                                : new random_mock_1.Distribution.Discrete.Standard(field.range)
                };
            });
        }
        var attributes = cast_attributes(file.fields);
        var mocker = new random_mock_1.Mocker({
            attributes: attributes,
            rules: rule_1["default"].rules
        });
        var data = mocker.create({
            count: 1e4,
            mode: random_mock_1.DataMode.Table
        });
        data === null || data === void 0 ? void 0 : data.forEach(function (value) {
            objectIndices.forEach(function (index) {
                value[index] = JSON.stringify(value[index]);
            });
        });
        dataset.name = sheetname;
        dataset.data = data;
        dataset.options = {};
        datasets.push(dataset);
    });
    var buffer = node_xlsx_1["default"].build(datasets, {});
    fs_1["default"].writeFile(path_1["default"].resolve("./src/data/example2.xlsx"), buffer, function (err) {
        if (err)
            throw err;
    });
};
mock();
