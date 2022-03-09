"use strict";
exports.__esModule = true;
var constants_1 = require("@/constants");
var constants_2 = require("@/constants");
var dataSource = {
    sheetname: "7 binder耗时",
    fields: [
        { name: "model", type: constants_2.FieldType.Scatter, range: ["PXXX00"] },
        { name: "app_version", type: constants_2.FieldType.Scatter, range: ["2"] },
        { name: "os_version", type: constants_2.FieldType.Scatter, range: ["V11.3"] },
        {
            name: "rom_version",
            type: constants_2.FieldType.Scatter,
            range: ["PXXX00_11_A.18", "PXXX00_11_A.16"]
        },
        { name: "android_version", type: constants_2.FieldType.Scatter, range: ["11"] },
        {
            name: "1e1434dd98fa2dd9_version",
            type: constants_2.FieldType.Scatter,
            range: ["5.1.35"]
        },
        { name: "channel", type: constants_2.FieldType.Scatter, range: ["OS"] },
        { name: "network_id", type: constants_2.FieldType.Scatter, range: ["WIFI", "UNKNOWN"] },
        { name: "operators_id", type: constants_2.FieldType.Scatter, range: ["0", "1", "2"] },
        { name: "app_name", type: constants_2.FieldType.Scatter, range: ["1e1434dd98fa2dd9"] },
        {
            name: "app_package",
            type: constants_2.FieldType.Scatter,
            range: ["10605205cb7ee0b8"]
        },
        { name: "event_id", type: constants_2.FieldType.Scatter, range: ["launch_time"] },
        { name: "log_tag", type: constants_2.FieldType.Scatter, range: ["2016101"] },
        {
            name: "log_map",
            type: constants_2.FieldType.Object,
            fields: [
                { name: "boot_time_day", type: constants_2.FieldType.Continuous, range: [1, 51] },
                {
                    name: "boot_time",
                    type: constants_2.FieldType.Continuous,
                    range: [92699422, 4398334045]
                },
                { name: "total_memory", type: constants_2.FieldType.Scatter, range: [12, 8] },
                {
                    name: "ota_version",
                    type: constants_2.FieldType.Scatter,
                    range: [
                        "PXXX00_11.A.18_0180_202109270157",
                        "PXXX00_11.A.16_0160_202108031927",
                    ]
                },
                {
                    name: "flash_ver",
                    type: constants_2.FieldType.Scatter,
                    range: ["KLUEG8UHDC-B0E1"]
                },
                { name: "total_storage", type: constants_2.FieldType.Scatter, range: [227, 108] },
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
            range: ["", "46000", "46001"]
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
            range: [
                "PENM00_11.A.18_0180_202109270157",
                "PENM00_11.A.16_0160_202108031927",
            ]
        },
        { name: "dayno", type: constants_2.FieldType.Scatter, range: ["20211105"] },
        { name: "hour", type: constants_2.FieldType.Scatter, range: ["7"] },
        { name: "brand", type: constants_2.FieldType.Scatter, range: ["OPPO"] },
        { name: "region", type: constants_2.FieldType.Scatter, range: ["CN"] },
    ]
};
exports["default"] = dataSource;
