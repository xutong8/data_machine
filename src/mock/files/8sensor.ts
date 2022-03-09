import { BEGIN_DATE, END_DATE } from "@/constants";
import { FieldType } from "@/constants";

const dataSource = {
  sheetname: "8 sensorTemp",
  fields: [
    { name: "model", type: FieldType.Scatter, range: ["PXXX00"] },
    { name: "app_version", type: FieldType.Scatter, range: ["2"] },
    { name: "os_version", type: FieldType.Scatter, range: ["V11.3"] },
    { name: "rom_version", type: FieldType.Scatter, range: ["PXXX00_11_A.18"] },
    { name: "android_version", type: FieldType.Scatter, range: ["11"] },
    {
      name: "1e1434dd98fa2dd9_version",
      type: FieldType.Scatter,
      range: ["5.1.35"],
    },
    { name: "channel", type: FieldType.Scatter, range: ["OS"] },
    {
      name: "network_id",
      type: FieldType.Scatter,
      range: ["WIFI", "4G", "UNKNOWN"],
    },
    { name: "operators_id", type: FieldType.Scatter, range: ["0", "1", "2"] },
    { name: "app_name", type: FieldType.Scatter, range: ["1e1434dd98fa2dd9"] },
    {
      name: "app_package",
      type: FieldType.Scatter,
      range: ["10605205cb7ee0b8"],
    },
    { name: "event_id", type: FieldType.Scatter, range: ["exceptionrecord"] },
    { name: "log_tag", type: FieldType.Scatter, range: ["2016101"] },
    {
      name: "log_map",
      type: FieldType.Object,
      fields: [
        {
          name: "sensorTemp",
          type: FieldType.Continuous,
          range: [22.419, 42.324],
        },
        {
          name: "cpu_little_cluster_max_freq",
          type: FieldType.Scatter,
          range: [1804800, 1612800, 1420800],
        },
        {
          name: "cpu_big_cluster_max_freq",
          type: FieldType.Scatter,
          range: [
            1478400, 1766400, 19558400, 1670400, 2342400, 2419200, 2419200,
          ],
        },
        {
          name: "cpu_super_big_cluster_max_freq",
          type: FieldType.Scatter,
          range: [2265600, 2841600, 3187200],
        },
        {
          name: "ota_version",
          type: FieldType.Scatter,
          range: ["PXXX00_11.A.18_0180_202109270157"],
        },
        {
          name: "totalmemory",
          type: FieldType.Scatter,
          range: [7686860, 7686864, 11768524, 11768528],
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
      range: ["46011", "46001", "46000"],
    },
    {
      name: "sim2_carrier",
      type: FieldType.Scatter,
      range: ["", "46011", "46000"],
    },
    { name: "seqno", type: FieldType.Scatter, range: ["0"] },
    {
      name: "topic_name",
      type: FieldType.Scatter,
      range: ["os_uni_channel_20161"],
    },
    {
      name: "ota_version",
      type: FieldType.Scatter,
      range: ["PENM00_11.A.18_0180_202109270157"],
    },
    { name: "dayno", type: FieldType.Scatter, range: ["20211105"] },
    { name: "hour", type: FieldType.Scatter, range: ["8"] },
    { name: "brand", type: FieldType.Scatter, range: ["OPPO"] },
    { name: "region", type: FieldType.Scatter, range: ["CN"] },
  ],
};

export default dataSource;
