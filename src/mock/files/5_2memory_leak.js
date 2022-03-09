"use strict";
exports.__esModule = true;
var constants_1 = require("@/constants");
var constants_2 = require("@/constants");
var dataSource = {
    sheetname: "5_2 memory_leak",
    fields: [
        { name: "model", type: constants_2.FieldType.Scatter, range: ["PXXX00"] },
        { name: "app_version", type: constants_2.FieldType.Scatter, range: ["1.9.19"] },
        { name: "os_version", type: constants_2.FieldType.Scatter, range: ["V11.3"] },
        {
            name: "rom_version",
            type: constants_2.FieldType.Scatter,
            range: ["PENM00_11_A.18", "PENM00_11_A.16"]
        },
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
        {
            name: "app_name",
            type: constants_2.FieldType.Scatter,
            range: [
                "25ac62e765aad206",
                "25ac62e765aad207",
                "25ac62e765aad208",
                "25ac62e765aad209",
                "25ac62e765aad210",
                "25ac62e765aad211",
                "25ac62e765aad212",
                "25ac62e765aad213",
                "25ac62e765aad214",
                "25ac62e765aad215",
            ]
        },
        {
            name: "app_package",
            type: constants_2.FieldType.Scatter,
            range: ["25ac62e765aad206"]
        },
        {
            name: "event_id",
            type: constants_2.FieldType.Scatter,
            range: ["pkg_mem_abnormal_data"]
        },
        { name: "log_tag", type: constants_2.FieldType.Scatter, range: ["unifiedCleaning"] },
        {
            name: "log_map",
            type: constants_2.FieldType.Object,
            fields: [
                { name: "proc_cnt", type: constants_2.FieldType.Continuous, range: [3, 10] },
                { name: "mem", type: constants_2.FieldType.Continuous, range: [1215, 3778] },
                { name: "ab_flag", type: constants_2.FieldType.Scatter, range: [2, 4] },
                { name: "p_type", type: constants_2.FieldType.Scatter, range: [1, 2] },
                { name: "total_pss", type: constants_2.FieldType.Continuous, range: [588, 2155] },
                {
                    name: "threshold",
                    type: constants_2.FieldType.Scatter,
                    range: [1147, 2765, 3157, 4096]
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
        { name: "system_id", type: constants_2.FieldType.Scatter, range: ["20150"] },
        {
            name: "sim1_carrier",
            type: constants_2.FieldType.Scatter,
            range: ["46011", "46001", "46000"]
        },
        {
            name: "sim2_carrier",
            type: constants_2.FieldType.Scatter,
            range: ["", "46001", "46001"]
        },
        { name: "seqno", type: constants_2.FieldType.Scatter, range: ["0"] },
        {
            name: "topic_name",
            type: constants_2.FieldType.Scatter,
            range: ["os_uni_channel_20150"]
        },
        {
            name: "os_properties",
            type: constants_2.FieldType.Object,
            fields: [
                { name: "multi_user_id", type: constants_2.FieldType.Scatter, range: ["0"] },
                {
                    name: "gaid",
                    type: constants_2.FieldType.Scatter,
                    range: [
                        "",
                        "01ccd299-6a9b-4fc6-b816-20e1d6b2629f",
                        "cbc4778c-79b4-4b26-bd4f-f97e9ef3428d",
                    ]
                },
                {
                    name: "otaVersion",
                    type: constants_2.FieldType.Scatter,
                    range: ["PXXX00_11.A.17_0170_202109182119"]
                },
                { name: "ouid_status", type: constants_2.FieldType.Scatter, range: ["1"] },
            ]
        },
        { name: "dayno", type: constants_2.FieldType.Scatter, range: ["20211105"] },
        { name: "hour", type: constants_2.FieldType.Scatter, range: ["6"] },
        { name: "brand", type: constants_2.FieldType.Scatter, range: ["OPPO"] },
        { name: "region", type: constants_2.FieldType.Scatter, range: ["CN"] },
    ]
};
exports["default"] = dataSource;
