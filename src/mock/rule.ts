import { RegulationConfig, RegulationType } from "random-mock/src/regulation";

export const my_rules: RegulationConfig[] = [
  {
    target: "model",
    source: ["os_version"],
    type: "mappingtable" as RegulationType,
    conditions: [
      { os_version: "V11.0", value: "PXXX00" },
    ],
    confidence: 0.9,
  },

  {
    target: "android_version",
    source: ["rom_version"],
    type: "mappingtable" as RegulationType,
    conditions: [
      { rom_version: ["PXXX00_11_A.25", "PXXX00_11_A.26"], value: "11" },
    ],
    confidence: 0.9,
  },

  {
    target: "operators_id",
    source: ["rom_version"],
    type: "mappingtable" as RegulationType,
    conditions: [
      {
        rom_version: ["PXXX00_11_A.25", "PXXX00_11_A.26"],
        value: {
          type: "standard",
          range: ["0", "1", "2"],
          p: [0.2, 0.2, 0.6],
        },
      },
    ],
    confidence: 0.9,
  },
  {
    target: "1e1434dd98fa2dd9_version",
    source: ["channel"],
    type: "mappingtable" as RegulationType,
    conditions: [
      {
        channel: "ColorOS",
        value: {
          type: "standard",
          range: ["5.1.19232", "5.1.19238"],
          p: [0.3, 0.7],
        },
      },
    ],
    confidence: 0.9,
  },

  {
    target: "sim2_carrier",
    source: ["sim1_carrier"],
    type: "mappingtable" as RegulationType,
    conditions: [
      {
        sim1_carrier: "46000",
        value: {
          type: "standard",
          range: ["46001", "46011"],
          p: [0.5, 0.5],
        },
      },
    ],

    confidence: 0.9,
  },

  {
    target: "app_version",
    source: ["app_name"],
    type: "mappingtable" as RegulationType,
    conditions: [
      {
        app_name: "1e1434dd98fa2dd5",
        value: {
          type: "standard",
          range: ["1", "2", "3"],
          p: [0.1, 0.6, 0.3],
        },
      },
      {
        app_name: "1e1434dd98fa2dd6",
        value: {
          type: "standard",
          range: ["2", "3"],
          p: [0.05, 0.95],
        },
      },
    ],
    confidence: 0.9,
  },

  {
    target: "app_package",
    source: ["app_version"],
    type: "mappingtable" as RegulationType,
    conditions: [
      {
        app_version: "1",
        value: {
          type: "standard",
          range: [
            "10605205cb7ee0b9",
            "10605205cb7ee0b11",
            "10605205cb7ee0b12",
          ],
          p: [0.6, 0.3, 0.1],
        },
      },
      {
        app_version: "2",
        value: {
          type: "standard",
          range: [
            "10605205cb7ee0b9",
            "10605205cb7ee0b10",
          ],
          p: [0.1, 0.9],
        },
      },
    ],
    confidence: 0.9,
  },

  {
    target: "ota_version",
    source: ["system_id", "topic_name"],
    type: "mappingtable" as RegulationType,
    conditions: [
      {
        system_id: "20160",
        topic_name: "os_uni_channel_20160",
        value: {
          type: "standard",
          range: [
            "PXXX0020139_11.A.25_0250_202108241641",
            "PXXX00_11.A.26_0260_202108231255",
            "PXXX00_11.A.27_0270_202110131940",
            "PXXX00_11.A.25_0250_202106240033",
          ],
          p: [0.2, 0.2, 0.2, 0.4],
        },
      },
      {
        system_id: "20160",
        topic_name: "os_uni_channel_20161",
        value: {
          type: "standard",
          range: [
            "PXXX0020139_11.A.25_0250_202108241641",
            "PXXX00_11.A.26_0260_202108231255",
            "PXXX00_11.A.27_0270_202110131940",
            "PXXX00_11.A.25_0250_202106240033",
          ],
          p: [0.6, 0.1, 0.2, 0.1],
        },
      },
      {
        system_id: "20161",
        topic_name: "os_uni_channel_20160",
        value: {
          type: "standard",
          range: [
            "PXXX0020139_11.A.25_0250_202108241641",
            "PXXX00_11.A.26_0260_202108231255",
            "PXXX00_11.A.27_0270_202110131940",
            "PXXX00_11.A.25_0250_202106240033",
          ],
          p: [0.3, 0.3, 0.3, 0.1],
        },
      },
      {
        value: {
          type: "standard",
          range: [
            "PXXX0020139_11.A.25_0250_202108241641",
            "PXXX00_11.A.26_0260_202108231255",
            "PXXX00_11.A.27_0270_202110131940",
            "PXXX00_11.A.25_0250_202106240033",
          ],
          p: [0.5, 0.4, 0.05, 0.05],
        },
      },
    ],
    confidence: 0.9,
  },
];
