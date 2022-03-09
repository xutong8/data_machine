"use strict";
exports.__esModule = true;
var constants_1 = require("@/constants");
var constants_2 = require("@/constants");
var dataSource = {
    sheetname: "8 sensorTemp",
    fields: [
        { name: "model", type: constants_2.FieldType.Scatter, range: ["PXXX00"] },
        { name: "app_version", type: constants_2.FieldType.Scatter, range: ["2"] },
        { name: "os_version", type: constants_2.FieldType.Scatter, range: ["V11.3"] },
        { name: "rom_version", type: constants_2.FieldType.Scatter, range: ["PXXX00_11_A.18"] },
        { name: "android_version", type: constants_2.FieldType.Scatter, range: ["11"] },
        {
            name: "1e1434dd98fa2dd9_version",
            type: constants_2.FieldType.Scatter,
            range: ["5.1.35"]
        },
        { name: "channel", type: constants_2.FieldType.Scatter, range: ["OS"] },
        {
            name: "network_id",
            type: constants_2.FieldType.Scatter,
            range: ["WIFI", "4G", "UNKNOWN"]
        },
        { name: "operators_id", type: constants_2.FieldType.Scatter, range: ["0", "1", "2"] },
        { name: "app_name", type: constants_2.FieldType.Scatter, range: ["1e1434dd98fa2dd9"] },
        {
            name: "app_package",
            type: constants_2.FieldType.Scatter,
            range: ["10605205cb7ee0b8"]
        },
        { name: "event_id", type: constants_2.FieldType.Scatter, range: ["exceptionrecord"] },
        { name: "log_tag", type: constants_2.FieldType.Scatter, range: ["2016101"] },
        {
            name: "log_map",
            type: constants_2.FieldType.Object,
            fields: [
                {
                    name: "sensorTemp",
                    type: constants_2.FieldType.Continuous,
                    range: [22.419, 42.324]
                },
                {
                    name: "cpu_little_cluster_max_freq",
                    type: constants_2.FieldType.Scatter,
                    range: [1804800, 1612800, 1420800]
                },
                {
                    name: "cpu_big_cluster_max_freq",
                    type: constants_2.FieldType.Scatter,
                    range: [
                        1478400, 1766400, 19558400, 1670400, 2342400, 2419200, 2419200,
                    ]
                },
                {
                    name: "cpu_super_big_cluster_max_freq",
                    type: constants_2.FieldType.Scatter,
                    range: [2265600, 2841600, 3187200]
                },
                {
                    name: "ota_version",
                    type: constants_2.FieldType.Scatter,
                    range: ["PXXX00_11.A.18_0180_202109270157"]
                },
                {
                    name: "totalmemory",
                    type: constants_2.FieldType.Scatter,
                    range: [7686860, 7686864, 11768524, 11768528]
                },
            ]
        },
        {
            name: "server_time",
            type: constants_2.FieldType.Date,
            range: [constants_1.BEGIN_DATE, constants_1.END_DATE]
        },
        {
            name: "client_time",
            type: constants_2.FieldType.Date,
            range: [constants_1.BEGIN_DATE, constants_1.END_DATE]
        },
        { name: "system_id", type: constants_2.FieldType.Scatter, range: ["20161"] },
        {
            name: "sim1_carrier",
            type: constants_2.FieldType.Scatter,
            range: ["46011", "46001", "46000"]
        },
        {
            name: "sim2_carrier",
            type: constants_2.FieldType.Scatter,
            range: ["", "46011", "46000"]
        },
        { name: "seqno", type: constants_2.FieldType.Scatter, range: ["0"] },
        {
            name: "topic_name",
            type: constants_2.FieldType.Scatter,
            range: ["os_uni_channel_20161"]
        },
        {
            name: "ota_version",
            type: constants_2.FieldType.Scatter,
            range: ["PENM00_11.A.18_0180_202109270157"]
        },
        { name: "dayno", type: constants_2.FieldType.Scatter, range: ["20211105"] },
        { name: "hour", type: constants_2.FieldType.Scatter, range: ["8"] },
        { name: "brand", type: constants_2.FieldType.Scatter, range: ["OPPO"] },
        { name: "region", type: constants_2.FieldType.Scatter, range: ["CN"] },
    ]
};
exports["default"] = dataSource;
