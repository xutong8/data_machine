"use strict";
exports.__esModule = true;
var constants_1 = require("@/constants");
var constants_2 = require("@/constants");
var dataSource = {
    sheetname: "1_1 skip",
    fields: [
        {
            name: "log_map",
            type: constants_2.FieldType.Object,
            fields: [
                {
                    name: "skip",
                    type: constants_2.FieldType.Scatter,
                    range: ["56-107-23005"]
                },
                {
                    name: "totalmemory",
                    type: constants_2.FieldType.Scatter,
                    range: [4, 8, 12]
                },
                {
                    name: "ota_version",
                    type: constants_2.FieldType.Scatter,
                    range: [
                        "PXXX0020139_11.A.25_0250_202108241641",
                        "PXXX00_11.A.26_0260_202108231255",
                    ]
                },
            ]
        },
        {
            name: "model",
            type: constants_2.FieldType.Scatter,
            range: ["PXXX00", "PXXX01", "PXXX02", "PXXX03"]
        },
        {
            name: "app_version",
            type: constants_2.FieldType.Scatter,
            range: ["1", "2", "3"]
        },
        {
            name: "os_version",
            type: constants_2.FieldType.Scatter,
            range: ["V11.0", "V11.1", "V11.2", "V11.3"]
        },
        {
            name: "rom_version",
            type: constants_2.FieldType.Scatter,
            range: [
                "PXXX00_11_A.25",
                "PXXX00_11_A.26",
                "PXXX00_11_A.27",
                "PXXX00_11_A.28",
            ]
        },
        {
            name: "android_version",
            type: constants_2.FieldType.Scatter,
            range: ["11", "12"]
        },
        {
            name: "1e1434dd98fa2dd9_version",
            type: constants_2.FieldType.Scatter,
            range: ["5.1.19232", "5.1.19238"]
        },
        {
            name: "channel",
            type: constants_2.FieldType.Scatter,
            range: ["ColorOS", "Android"]
        },
        {
            name: "network_id",
            type: constants_2.FieldType.Scatter,
            range: ["UNKNOWN"]
        },
        {
            name: "operators_id",
            type: constants_2.FieldType.Scatter,
            range: ["0", "1", "2"]
        },
        {
            name: "app_name",
            type: constants_2.FieldType.Scatter,
            range: [
                "1e1434dd98fa2dd5",
                "1e1434dd98fa2dd6",
                "1e1434dd98fa2dd7",
                "1e1434dd98fa2dd8",
                "1e1434dd98fa2dd9",
            ]
        },
        {
            name: "app_package",
            type: constants_2.FieldType.Scatter,
            range: ["10605205cb7ee0b8"]
        },
        {
            name: "event_id",
            type: constants_2.FieldType.Scatter,
            range: ["launch_time"]
        },
        {
            name: "log_tag",
            type: constants_2.FieldType.Scatter,
            range: ["2016101"]
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
        {
            name: "system_id",
            type: constants_2.FieldType.Scatter,
            range: ["20160", "20161"]
        },
        {
            name: "sim1_carrier",
            type: constants_2.FieldType.Scatter,
            range: ["46000", "46001", "46011"]
        },
        {
            name: "sim2_carrier",
            type: constants_2.FieldType.Scatter,
            range: ["", "46000"]
        },
        {
            name: "seqno",
            type: constants_2.FieldType.Scatter,
            range: ["0"]
        },
        {
            name: "topic_name",
            type: constants_2.FieldType.Scatter,
            range: ["os_uni_channel_20160", "os_uni_channel_20161"]
        },
        {
            name: "ota_version",
            type: constants_2.FieldType.Scatter,
            range: [
                "PXXX0020139_11.A.25_0250_202108241641",
                "PXXX00_11.A.26_0260_202108231255",
                "PXXX00_11.A.27_0270_202110131940",
                "PXXX00_11.A.25_0250_202106240033",
            ]
        },
        {
            name: "dayno",
            type: constants_2.FieldType.Scatter,
            range: ["20211105"]
        },
        {
            name: "hour",
            type: constants_2.FieldType.Scatter,
            range: ["9"]
        },
        {
            name: "brand",
            type: constants_2.FieldType.Scatter,
            range: ["OPPO"]
        },
        {
            name: "region",
            type: constants_2.FieldType.Scatter,
            range: ["CN"]
        },
    ]
};
exports["default"] = dataSource;
