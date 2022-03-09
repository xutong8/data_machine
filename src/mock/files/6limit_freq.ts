import { BEGIN_DATE, END_DATE } from "@/constants";
import { FieldType } from "@/constants";

const dataSource = {
  sheetname: "6 限频",
  fields: [
    { name: "model", type: FieldType.Scatter, range: ["PXXX00"] },
    { name: "app_version", type: FieldType.Scatter, range: ["2"] },
    { name: "os_version", type: FieldType.Scatter, range: ["V11.1"] },
    {
      name: "rom_version",
      type: FieldType.Scatter,
      range: ["PXXX00_11_A.27", "PXXX00_11_A.26", "PXXX00_11_A.21"],
    },
    { name: "android_version", type: FieldType.Scatter, range: ["11"] },
    {
      name: "1e1434dd98fa2dd9_version",
      type: FieldType.Scatter,
      range: ["5.1.19238", "5.1.19231"],
    },
    { name: "channel", type: FieldType.Scatter, range: ["ColorOS"] },
    { name: "network_id", type: FieldType.Scatter, range: ["WIFI", "UNKNOWN"] },
    {
      name: "operators_id",
      type: FieldType.Scatter,
      range: ["0", "1", "2", "99"],
    },
    { name: "app_name", type: FieldType.Scatter, range: ["1e1434dd98fa2dd9"] },
    {
      name: "app_package",
      type: FieldType.Scatter,
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
      ],
    },
    { name: "event_id", type: FieldType.Scatter, range: ["exceptionrecord"] },
    { name: "log_tag", type: FieldType.Scatter, range: ["2016101"] },
    {
      name: "log_map",
      type: FieldType.Object,
      fields: [
        {
          name: "cpu_little_cluster_max_freq",
          type: FieldType.Scatter,
          range: [1804800],
        },
        {
          name: "cpu_big_cluster_max_freq",
          type: FieldType.Scatter,
          range: [2246400, 2419200],
        },
        {
          name: "cpu_super_big_cluster_max_freq",
          type: FieldType.Scatter,
          range: [2553600, 2841600],
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
          type: FieldType.Scatter,
          range: [11788228, 11788232, 11788380, 12],
        },
        {
          name: "sensorTemp",
          type: FieldType.Continuous,
          range: [21.829, 36.62],
        },
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
    { name: "system_id", type: FieldType.Scatter, range: ["20161"] },
    {
      name: "sim1_carrier",
      type: FieldType.Scatter,
      range: ["", "46011", "46001", "46000"],
    },
    {
      name: "sim2_carrier",
      type: FieldType.Scatter,
      range: ["", "46001", "46000"],
    },
    { name: "seqno", type: FieldType.Scatter, range: ["0"] },
    { name: "topic_name", type: FieldType.Scatter, range: ["os_uni_channel_20161"] },
    {
      name: "ota_version",
      type: FieldType.Scatter,
      range: [
        "PXXX00_11.A.27_0270_202110131940",
        "PXXX00_11.A.26_0260_202108231255",
        "PXXX00_11.A.21_0211_202102251403",
      ],
    },
    { name: "dayno", type: FieldType.Scatter, range: ["20211105"] },
    { name: "hour", type: FieldType.Scatter, range: ["8"] },
    { name: "brand", type: FieldType.Scatter, range: ["OPPO"] },
    { name: "region", type: FieldType.Scatter, range: ["CN"] },
  ],
};

export default dataSource;
