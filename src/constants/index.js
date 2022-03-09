"use strict";
exports.__esModule = true;
exports.FieldType = exports.END_DATE = exports.BEGIN_DATE = void 0;
// 对应2021-01-01 00:00:00
exports.BEGIN_DATE = 1609430400;
// 对应2021-12-31 00:00:00
exports.END_DATE = 1640880000;
// 字段类型
var FieldType;
(function (FieldType) {
    FieldType[FieldType["Scatter"] = 0] = "Scatter";
    FieldType[FieldType["Continuous"] = 1] = "Continuous";
    FieldType[FieldType["Object"] = 2] = "Object";
    FieldType[FieldType["Date"] = 3] = "Date";
})(FieldType = exports.FieldType || (exports.FieldType = {}));
