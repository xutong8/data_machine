import { BEGIN_DATE, END_DATE } from "@/constants";
import { FieldType } from "@/constants";

const dataSource = {
  sheetname: "5_1 memory",
  fields: [
    { name: "model", type: FieldType.Scatter, range: ["PENM00"] },
    { name: "app_version", type: FieldType.Scatter, range: ["2"] },
    { name: "os_version", type: FieldType.Scatter, range: ["V11.3"] },
    {
      name: "rom_version",
      type: FieldType.Scatter,
      range: ["PENM00_11_A.18", "PENM00_11_A.16"],
    },
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
    { name: "event_id", type: FieldType.Scatter, range: ["healthinfo"] },
    { name: "log_tag", type: FieldType.Scatter, range: ["2016101"] },
    {
      name: "log_map",
      type: FieldType.Object,
      fields: [
        {
          name: "rt_memTotal",
          type: FieldType.Scatter,
          range: [7686872, 11768528],
        },
        {
          name: "rt_memAvailable",
          type: FieldType.Continuous,
          range: [1964996, 6452320],
        },
        {
          name: "data_avai",
          type: FieldType.Continuous,
          range: [53479668, 112463820],
        },
        {
          name: "data_total",
          type: FieldType.Scatter,
          range: [112463820, 237424588],
        },
        {
          name: "rt_slab",
          type: FieldType.Continuous,
          range: [492284, 644286],
        },
        {
          name: "rt_sreclaim",
          type: FieldType.Continuous,
          range: [109892, 269344],
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
    { name: "sim2_carrier", type: FieldType.Scatter, range: ["", "46011"] },
    { name: "seqno", type: FieldType.Scatter, range: ["0"] },
    {
      name: "topic_name",
      type: FieldType.Scatter,
      range: ["os_uni_channel_20161"],
    },
    {
      name: "ota_version",
      type: FieldType.Scatter,
      range: [
        "PENM00_11.A.18_0180_202109270157",
        "PENM00_11.A.16_0160_202108031927",
      ],
    },
    { name: "dayno", type: FieldType.Scatter, range: ["20211105"] },
    { name: "hour", type: FieldType.Scatter, range: ["6"] },
    { name: "brand", type: FieldType.Scatter, range: ["OPPO"] },
    { name: "region", type: FieldType.Scatter, range: ["CN"] },
  ],
};

export default dataSource;