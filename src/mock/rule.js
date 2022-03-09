"use strict";
exports.__esModule = true;
var random_mock_1 = require("random-mock");
var rules = [
    {
        dependent: 'model',
        arguments: ['os_version'],
        effect: function (os_version) { return os_version === 'V11.0'
            ? "PXXX00"
            : os_version === 'V11.1'
                ? "PXXX01"
                : os_version === 'V11.2'
                    ? "PXXX02"
                    : "PXXX03"; },
        confidence: 0.98
    },
    {
        dependent: 'android_version',
        arguments: ['rom_version'],
        effect: function (rom_version) { return rom_version === 'PXXX00_11_A.25' || rom_version === 'PXXX00_11_A.26'
            ? "11"
            : "12"; },
        confidence: 0.98
    },
    {
        dependent: "operators_id",
        arguments: ['rom_version'],
        effect: function (rom_version) { return rom_version === 'PXXX00_11_A.25' || rom_version === 'PXXX00_11_A.26'
            ? random_mock_1.Distribution.Discrete.Standard(["0", "1", "2"], [0.2, 0.2, 0.6])
            : random_mock_1.Distribution.Discrete.Standard(["0", "1", "2"], [0.6, 0.2, 0.2]); },
        confidence: 0.98
    },
    {
        dependent: '1e1434dd98fa2dd9_version',
        arguments: ['channel'],
        effect: function (channel) { return channel === "ColorOS"
            ? random_mock_1.Distribution.Discrete.Standard(['5.1.19232', '5.1.19238'], [0.3, 0.7])
            : random_mock_1.Distribution.Discrete.Standard(['5.1.19232', '5.1.19238'], [0.8, 0.2]); },
        confidence: 0.98
    },
    {
        dependent: 'sim2_carrier',
        arguments: ['sim1_carrier'],
        effect: function (sim1_carrier) { return sim1_carrier === '46000'
            ? random_mock_1.Distribution.Discrete.Standard(["46000", "46001", "46011"], [0.2, 0.4, 0.4])
            : sim1_carrier === '46001'
                ? random_mock_1.Distribution.Discrete.Standard(["46000", "46001", "46011"], [0.4, 0.2, 0.4])
                : random_mock_1.Distribution.Discrete.Standard(["46000", "46001", "46011"], [0.4, 0.4, 0.2]); },
        confidence: 0.98
    },
    {
        dependent: 'app_version',
        arguments: ['app_name'],
        effect: function (app_name) { return app_name === "1e1434dd98fa2dd5"
            ? random_mock_1.Distribution.Discrete.Standard(["1", "2", "3"], [0.1, 0.6, 0.3])
            : app_name === "1e1434dd98fa2dd6"
                ? random_mock_1.Distribution.Discrete.Standard(["1", "2", "3"], [0.2, 0.5, 0.3])
                : app_name === "1e1434dd98fa2dd7"
                    ? random_mock_1.Distribution.Discrete.Standard(["1", "2", "3"], [0.8, 0.1, 0.1])
                    : app_name === "1e1434dd98fa2dd8"
                        ? random_mock_1.Distribution.Discrete.Standard(["1", "2", "3"], [0.9, 0.05, 0.05])
                        : random_mock_1.Distribution.Discrete.Standard(["1", "2", "3"], [0.1, 0.1, 0.8]); },
        confidence: 0.98
    },
    {
        dependent: 'app_package',
        arguments: ['app_version'],
        effect: function (app_version) { return app_version === "1"
            ? random_mock_1.Distribution.Discrete.Standard([
                "10605205cb7ee0b9", "10605205cb7ee0b10", "10605205cb7ee0b11", "10605205cb7ee0b12",
            ], [0.6, 0.1, 0.2, 0.1])
            : app_version === "2"
                ? random_mock_1.Distribution.Discrete.Standard([
                    "10605205cb7ee0b9", "10605205cb7ee0b10", "10605205cb7ee0b11", "10605205cb7ee0b12",
                ], [0.3, 0.2, 0.1, 0.4])
                : random_mock_1.Distribution.Discrete.Standard([
                    "10605205cb7ee0b9", "10605205cb7ee0b10", "10605205cb7ee0b11", "10605205cb7ee0b12",
                ], [0.1, 0.1, 0.1, 0.7]); },
        confidence: 0.98
    },
    {
        dependent: "ota_version",
        arguments: ["system_id,", "topic_name"],
        effect: function (system_id, topic_name) { return random_mock_1.Distribution.Discrete.Standard([
            "PXXX0020139_11.A.25_0250_202108241641",
            "PXXX00_11.A.26_0260_202108231255",
            "PXXX00_11.A.27_0270_202110131940",
            "PXXX00_11.A.25_0250_202106240033",
        ], system_id === "20160" && topic_name === "os_uni_channel_20160"
            ? [0.2, 0.2, 0.2, 0.4]
            : system_id === "20160" && topic_name === "os_uni_channel_20161"
                ? [0.6, 0.1, 0.2, 0.1]
                : system_id === "20161" && topic_name === "os_uni_channel_20160"
                    ? [0.3, 0.3, 0.3, 0.1]
                    : [0.5, 0.4, 0.05, 0.05]); },
        confidence: 0.98
    },
];
