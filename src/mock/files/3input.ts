import { FieldType } from "@/constants";
import { BEGIN_DATE, END_DATE } from "@/constants";

const dataSource = {
  sheetname: "3 input",
  fields: [
    {
      name: "model",
      type: FieldType.Scatter,
      range: ["PXXX00", "PXXX01", "PXXX02", "PXXX03"],
    },
    {
      name: "app_version",
      type: FieldType.Scatter,
      range: ["1", "2", "3"],
    },
    {
      name: "os_version",
      type: FieldType.Scatter,
      range: ["V11.0", "V11.1", "V11.2", "V11.3"],
    },
    {
      name: "rom_version",
      type: FieldType.Scatter,
      range: [
        "PXXX00_11_A.25",
        "PXXX00_11_A.26",
        "PXXX00_11_A.27",
        "PXXX00_11_A.28",
      ],
    },
    {
      name: "android_version",
      type: FieldType.Scatter,
      range: ["11", "12"],
    },
    {
      name: "1e1434dd98fa2dd9_version",
      type: FieldType.Scatter,
      range: ["5.1.19232", "5.1.19238"],
    },
    {
      name: "channel",
      type: FieldType.Scatter,
      range: ["ColorOS", "Android"],
    },
    {
      name: "network_id",
      type: FieldType.Scatter,
      range: ["UNKNOWN"],
    },
    {
      name: "operators_id",
      type: FieldType.Scatter,
      range: ["0", "1", "2"],
    },
    {
      name: "app_name",
      type: FieldType.Scatter,
      range: [
        "1e1434dd98fa2dd5",
        "1e1434dd98fa2dd6",
        "1e1434dd98fa2dd7",
        "1e1434dd98fa2dd8",
        "1e1434dd98fa2dd9",
      ],
    },
    {
      name: "app_package",
      type: FieldType.Scatter,
      range: ["10605205cb7ee0b8"],
    },
    {
      name: "event_id",
      type: FieldType.Scatter,
      range: ["launch_time"],
    },
    {
      name: "log_tag",
      type: FieldType.Scatter,
      range: ["2016101"],
    },
    {
      name: "log_map",
      type: FieldType.Object,
      fields: [
        {
          name: "jank_type",
          type: FieldType.Scatter,
          range: ["input"],
        },
        {
          name: "cost",
          type: FieldType.Continuous,
          range: [1000, 2000],
        },
        {
          name: "packageName",
          type: FieldType.Scatter,
          range: [
            "6a0a2d2b4a03b7c2",
            "-999",
            "d400f6adb210d7e3",
            "04398380775c7b79",
          ],
        },
        {
          name: "activityTop",
          type: FieldType.Scatter,
          range: [
            "com.nearme.game.1e1434dd98fa2dd9.component.proxy.ProxyActivity",
            "com.alihealth.imuikit.activity.SendRedPacketActivity",
            "com.bilibili.column.ui.detail.ColumnDetailActivity",
            ".QihuVideoMainActivity",
          ],
        },
        {
          name: "ota_version",
          type: FieldType.Scatter,
          range: [
            "PXXX00_11.A.27_0270_202110131940",
            "PXXX00_11.A.26_0260_202108231255",
            "PXXX00_11.A.27_0270_202110131940",
          ],
        },
        {
          name: "totalmemory",
          type: FieldType.Continuous,
          range: [11788228, 11788232, 11788380, 12],
        },
        { name: "sensorTemp", type: FieldType.Scatter, range: [21.829, 36.62] },
      ],
    },
    {
      name: "server_time",
      type: FieldType.Date,
      range: [BEGIN_DATE, END_DATE],
    },
    {
      name: "client_time",
      type: FieldType.Date,
      range: [BEGIN_DATE, END_DATE],
    },
    {
      name: "system_id",
      type: FieldType.Scatter,
      range: ["20160", "20161"],
    },
    {
      name: "sim1_carrier",
      type: FieldType.Scatter,
      range: ["46000", "46001", "46011"],
    },
    {
      name: "sim2_carrier",
      type: FieldType.Scatter,
      range: ["", "46000"],
    },
    {
      name: "seqno",
      type: FieldType.Scatter,
      range: ["0"],
    },
    {
      name: "topic_name",
      type: FieldType.Scatter,
      range: ["os_uni_channel_20160", "os_uni_channel_20161"],
    },
    {
      name: "ota_version",
      type: FieldType.Scatter,
      range: [
        "PXXX0020139_11.A.25_0250_202108241641",
        "PXXX00_11.A.26_0260_202108231255",
        "PXXX00_11.A.27_0270_202110131940",
        "PXXX00_11.A.25_0250_202106240033",
      ],
    },
    {
      name: "dayno",
      type: FieldType.Scatter,
      range: ["20211105"],
    },
    {
      name: "hour",
      type: FieldType.Scatter,
      range: ["9"],
    },
    {
      name: "brand",
      type: FieldType.Scatter,
      range: ["OPPO"],
    },
    {
      name: "region",
      type: FieldType.Scatter,
      range: ["CN"],
    },
  ],
};

export default dataSource;
