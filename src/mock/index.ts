import { FieldType } from "@/constants";
import files from "./files";
import xlsx from "node-xlsx";
import fs from "fs";
import path from "path";
import dayjs from "dayjs";
import { Mocker, AttributeType, Distribution, DataMode } from "random-mock";
import { my_rules } from "./rule";

const mock = () => {
  const datasets = [] as any[];
  const runfile = (file: any) => {
    const dataset = {} as any;
    const sheetname = file.sheetname;
    function case_single_attribute(field: any) {
      return field.type === FieldType.Continuous
        ? {
            name: field.name,
            type: AttributeType.Continuous,
            distribution: {
              type: "uniform",
              range: field.range,
            },
          }
        : field.type === FieldType.Date
        ? {
            name: field.name,
            type: AttributeType.Date,
            distribution: {
              type: "uniform",
              range: field.range,
            },
          }
        : {
            name: field.name,
            type: AttributeType.Category,
            distribution: {
              type: "standard",
              range: field.range,
            },
          };
    }
    function cast_attributes(fields: any[]): any[] {
      let cast_fields = [] as any[];
      fields.forEach((field) => {
        if (field.type === FieldType.Object) {
          cast_fields.push({
            name: field.name,
            type: AttributeType.Compound,
            arguments: field.fields.map((f: any) => f.name),
          });
          field.fields.forEach((f: any) => {
            cast_fields.push(case_single_attribute(f));
          });
        } else {
          cast_fields.push(case_single_attribute(field));
        }
      });
      return cast_fields;
    }
    const attributes = cast_attributes(file.fields);
    const mocker = new Mocker({
      attributes,
      rules: my_rules,
    });
    const data = mocker.create({
      count: 1e4,
      mode: DataMode.Table,
      settings: {
        head: true,
        categoryBinarization: true,
        categoryBinaryFormat: [0,1]
      }
    });
    dataset.name = sheetname;
    dataset.data = data;
    dataset.options = {};
    datasets.push(dataset);
  };
  files.forEach((file) => runfile(file));
  const buffer = xlsx.build(datasets, {});

  fs.writeFile(path.resolve("./src/data/example2.xlsx"), buffer, (err: any) => {
    if (err) throw err;
  });
};

mock();
