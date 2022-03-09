"use strict";
exports.__esModule = true;
var constants_1 = require("@/constants");
var constants_2 = require("@/constants");
var dataSource = {
    sheetname: "6 限频",
    fields: [
        { name: "model", type: constants_2.FieldType.Scatter, range: ["PXXX00"] },
        { name: "app_version", type: constants_2.FieldType.Scatter, range: ["2"] },
        { name: "os_version", type: constants_2.FieldType.Scatter, range: ["V11.1"] },
        {
            name: "rom_version",
            type: constants_2.FieldType.Scatter,
            range: ["PXXX00_11_A.27", "PXXX00_11_A.26", "PXXX00_11_A.21"]
        },
        { name: "android_version", type: constants_2.FieldType.Scatter, range: ["11"] },
        {
            name: "1e1434dd98fa2dd9_version",
            type: constants_2.FieldType.Scatter,
            range: ["5.1.19238", "5.1.19231"]
        },
        { name: "channel", type: constants_2.FieldType.Scatter, range: ["ColorOS"] },
        { name: "network_id", type: constants_2.FieldType.Scatter, range: ["WIFI", "UNKNOWN"] },
        {
            name: "operators_id",
            type: constants_2.FieldType.Scatter,
            range: ["0", "1", "2", "99"]
        },
        { name: "app_name", type: constants_2.FieldType.Scatter, range: ["1e1434dd98fa2dd9"] },
        {
            name: "app_package",
            type: constants_2.FieldType.Scatter,
            range: [
                "10605205cb7ee0b8",
                "10605205cb7ee0b9",
                "10605205cb7ee0b10",
                "10605205cb7ee0b11",
                "10605205cb7ee0b12",
                "10605205cb7ee0b13",
                "10605205cb7ee0b14",
                "10605205cb7ee0b15",
                "10605205cb7ee0b16",
                "10605205cb7ee0b17",
            ]
        },
        { name: "event_id", type: constants_2.FieldType.Scatter, range: ["exceptionrecord"] },
        { name: "log_tag", type: constants_2.FieldType.Scatter, range: ["2016101"] },
        {
            name: "log_map",
            type: constants_2.FieldType.Object,
            fields: [
                {
                    name: "cpu_little_cluster_max_freq",
                    type: constants_2.FieldType.Scatter,
                    range: [1804800]
                },
                {
                    name: "cpu_big_cluster_max_freq",
                    type: constants_2.FieldType.Scatter,
                    range: [2246400, 2419200]
                },
                {
                    name: "cpu_super_big_cluster_max_freq",
                    type: constants_2.FieldType.Scatter,
                    range: [2553600, 2841600]
                },
                {
                    name: "ota_version",
                    type: constants_2.FieldType.Scatter,
                    range: [
                        "PXXX00_11.A.27_0270_202110131940",
                        "PXXX00_11.A.26_0260_202108231255",
                        "PXXX00_11.A.27_0270_202110131940",
                    ]
                },
                {
                    name: "totalmemory",
                    type: constants_2.FieldType.Scatter,
                    range: [11788228, 11788232, 11788380, 12]
                },
                {
                    name: "sensorTemp",
                    type: constants_2.FieldType.Continuous,
                    range: [21.829, 36.62]
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
            range: ["", "46011", "46001", "46000"]
        },
        {
            name: "sim2_carrier",
            type: constants_2.FieldType.Scatter,
            range: ["", "46001", "46000"]
        },
        { name: "seqno", type: constants_2.FieldType.Scatter, range: ["0"] },
        { name: "topic_name", type: constants_2.FieldType.Scatter, range: ["os_uni_channel_20161"] },
        {
            name: "ota_version",
            type: constants_2.FieldType.Scatter,
            range: [
                "PXXX00_11.A.27_0270_202110131940",
                "PXXX00_11.A.26_0260_202108231255",
                "PXXX00_11.A.21_0211_202102251403",
            ]
        },
        { name: "dayno", type: constants_2.FieldType.Scatter, range: ["20211105"] },
        { name: "hour", type: constants_2.FieldType.Scatter, range: ["8"] },
        { name: "brand", type: constants_2.FieldType.Scatter, range: ["OPPO"] },
        { name: "region", type: constants_2.FieldType.Scatter, range: ["CN"] },
    ]
};
exports["default"] = dataSource;
