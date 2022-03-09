"use strict";
exports.__esModule = true;
var constants_1 = require("@/constants");
var constants_2 = require("@/constants");
var dataSource = {
    sheetname: "3 input",
    fields: [
        {
            name: "model",
            type: constants_1.FieldType.Scatter,
            range: ["PXXX00", "PXXX01", "PXXX02", "PXXX03"]
        },
        {
            name: "app_version",
            type: constants_1.FieldType.Scatter,
            range: ["1", "2", "3"]
        },
        {
            name: "os_version",
            type: constants_1.FieldType.Scatter,
            range: ["V11.0", "V11.1", "V11.2", "V11.3"]
        },
        {
            name: "rom_version",
            type: constants_1.FieldType.Scatter,
            range: [
                "PXXX00_11_A.25",
                "PXXX00_11_A.26",
                "PXXX00_11_A.27",
                "PXXX00_11_A.28",
            ]
        },
        {
            name: "android_version",
            type: constants_1.FieldType.Scatter,
            range: ["11", "12"]
        },
        {
            name: "1e1434dd98fa2dd9_version",
            type: constants_1.FieldType.Scatter,
            range: ["5.1.19232", "5.1.19238"]
        },
        {
            name: "channel",
            type: constants_1.FieldType.Scatter,
            range: ["ColorOS", "Android"]
        },
        {
            name: "network_id",
            type: constants_1.FieldType.Scatter,
            range: ["UNKNOWN"]
        },
        {
            name: "operators_id",
            type: constants_1.FieldType.Scatter,
            range: ["0", "1", "2"]
        },
        {
            name: "app_name",
            type: constants_1.FieldType.Scatter,
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
            type: constants_1.FieldType.Scatter,
            range: ["10605205cb7ee0b8"]
        },
        {
            name: "event_id",
            type: constants_1.FieldType.Scatter,
            range: ["launch_time"]
        },
        {
            name: "log_tag",
            type: constants_1.FieldType.Scatter,
            range: ["2016101"]
        },
        {
            name: "log_map",
            type: constants_1.FieldType.Object,
            fields: [
                {
                    name: "jank_type",
                    type: constants_1.FieldType.Scatter,
                    range: ["input"]
                },
                {
                    name: "cost",
                    type: constants_1.FieldType.Continuous,
                    range: [1000, 2000]
                },
                {
                    name: "packageName",
                    type: constants_1.FieldType.Scatter,
                    range: [
                        "6a0a2d2b4a03b7c2",
                        "-999",
                        "d400f6adb210d7e3",
                        "04398380775c7b79",
                    ]
                },
                {
                    name: "activityTop",
                    type: constants_1.FieldType.Scatter,
                    range: [
                        "com.nearme.game.1e1434dd98fa2dd9.component.proxy.ProxyActivity",
                        "com.alihealth.imuikit.activity.SendRedPacketActivity",
                        "com.bilibili.column.ui.detail.ColumnDetailActivity",
                        ".QihuVideoMainActivity",
                    ]
                },
                {
                    name: "ota_version",
                    type: constants_1.FieldType.Scatter,
                    range: [
                        "PXXX00_11.A.27_0270_202110131940",
                        "PXXX00_11.A.26_0260_202108231255",
                        "PXXX00_11.A.27_0270_202110131940",
                    ]
                },
                {
                    name: "totalmemory",
                    type: constants_1.FieldType.Continuous,
                    range: [11788228, 11788232, 11788380, 12]
                },
                { name: "sensorTemp", type: constants_1.FieldType.Scatter, range: [21.829, 36.62] },
            ]
        },
        {
            name: "server_time",
            type: constants_1.FieldType.Date,
            range: [constants_2.BEGIN_DATE, constants_2.END_DATE]
        },
        {
            name: "client_time",
            type: constants_1.FieldType.Date,
            range: [constants_2.BEGIN_DATE, constants_2.END_DATE]
        },
        {
            name: "system_id",
            type: constants_1.FieldType.Scatter,
            range: ["20160", "20161"]
        },
        {
            name: "sim1_carrier",
            type: constants_1.FieldType.Scatter,
            range: ["46000", "46001", "46011"]
        },
        {
            name: "sim2_carrier",
            type: constants_1.FieldType.Scatter,
            range: ["", "46000"]
        },
        {
            name: "seqno",
            type: constants_1.FieldType.Scatter,
            range: ["0"]
        },
        {
            name: "topic_name",
            type: constants_1.FieldType.Scatter,
            range: ["os_uni_channel_20160", "os_uni_channel_20161"]
        },
        {
            name: "ota_version",
            type: constants_1.FieldType.Scatter,
            range: [
                "PXXX0020139_11.A.25_0250_202108241641",
                "PXXX00_11.A.26_0260_202108231255",
                "PXXX00_11.A.27_0270_202110131940",
                "PXXX00_11.A.25_0250_202106240033",
            ]
        },
        {
            name: "dayno",
            type: constants_1.FieldType.Scatter,
            range: ["20211105"]
        },
        {
            name: "hour",
            type: constants_1.FieldType.Scatter,
            range: ["9"]
        },
        {
            name: "brand",
            type: constants_1.FieldType.Scatter,
            range: ["OPPO"]
        },
        {
            name: "region",
            type: constants_1.FieldType.Scatter,
            range: ["CN"]
        },
    ]
};
exports["default"] = dataSource;
