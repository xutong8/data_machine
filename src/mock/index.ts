import { FieldType } from "@/constants";
import files from "./files";
import xlsx from "node-xlsx";
import dayjs from "dayjs";
import fs from "fs";
import path from "path";

function handleScatterType(field: any) {
  const range = field?.range ?? [];
  const len = range.length;

  if (len === 0) {
    throw new Error("scatter range len must not be zero!");
  }

  const index = Math.floor(Math.random() * len);
  const value = range[index];
  return value;
}

function handleContinuousType(field: any) {
  const range = field?.range ?? [];
  const len = range.length;

  if (len === 0) {
    throw new Error("continuous range len must not be zero!");
  }

  const minRange = +range[0];
  const maxRange = +range[1];
  const value = minRange + Math.floor((maxRange - minRange) * Math.random());
  return value;
}

function handleDateType(field: any) {
  const range = field?.range ?? [];
  const len = range.length;

  if (len === 0) {
    throw new Error("date range len must not be zero!");
  }

  const begin_date = range[0] as number;
  const end_date = range[1] as number;
  const date = begin_date + Math.floor((end_date - begin_date) * Math.random());
  const value = dayjs.unix(date).format("YYYY/MM/DD HH:mm");
  return value;
}

function handleObjectType(field: any) {
  const object_fields = (field?.fields ?? []) as any[];
  const value = {} as any;
  object_fields.forEach((object_field) => {
    const object_field_type = object_field.type;
    const object_field_name = object_field.name;
    switch (object_field_type) {
      case FieldType.Scatter: {
        value[object_field_name] = handleScatterType(object_field);
        break;
      }
      case FieldType.Continuous: {
        value[object_field_name] = handleContinuousType(object_field);
        break;
      }
      case FieldType.Date: {
        value[object_field_name] = handleDateType(object_field);
        break;
      }
    }
  });
  return value;
}

const mock = () => {
  const datasets = [] as any[];
  files.forEach((file) => {
    const dataset = {} as any;
    const sheetname = file.sheetname;
    const fields = file.fields;
    // headers
    const headers = [] as string[];
    fields.forEach((field) => {
      const header = field.name;
      headers.push(header);
    });
    // mock 1w条数据
    const body = [];
    const iteration_times = 10000;
    for (let i = 0; i < iteration_times; i++) {
      const item = [] as any[];
      fields.forEach((field, fieldIndex) => {
        const type = field.type;
        switch (type) {
          case FieldType.Scatter: {
            item[fieldIndex] = handleScatterType(field);
            break;
          }
          case FieldType.Continuous: {
            item[fieldIndex] = handleContinuousType(field);
            break;
          }
          case FieldType.Date: {
            item[fieldIndex] = handleDateType(field);
            break;
          }
          case FieldType.Object: {
            item[fieldIndex] = JSON.stringify(handleObjectType(field));
            break;
          }
        }
      });
      body.push(item);
    }

    dataset.name = sheetname;
    dataset.data = [headers, ...body];
    dataset.options = {};
    datasets.push(dataset);
  });

  const buffer = xlsx.build(
    datasets,
    {}
  );

  fs.writeFile(path.resolve('./src/data/example2.xlsx'), buffer, (err: any) => {
    if(err) throw err;
  });
};

mock();