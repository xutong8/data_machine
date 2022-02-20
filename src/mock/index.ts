import { FieldType } from "@/constants";
import files from "./files";
import xlsx from "node-xlsx";
import fs from "fs";
import path from "path";
import dayjs from "dayjs";
import { Mocker, AttributeType, Distribution, DataMode } from "random-mock";
import { Attribute } from "random-mock/src/util/Attribute";

const mock = () => {
  const datasets = [] as any[];
  files.forEach((file) => {
    const dataset = {} as any;
    const sheetname = file.sheetname;
    const objectIndices = [] as number[];
    function cast_attributes(fields: any[]): Attribute[] {
      return fields.map((field, index) => {
        if (field.type === FieldType.Object) objectIndices.push(index);
        return {
          name: field.name,
          type:
            field.type === FieldType.Continuous
              ? AttributeType.Continuous
              : field.type === FieldType.Date
              ? AttributeType.Date
              : field.type === FieldType.Object
              ? AttributeType.Compound
              : AttributeType.Discrete,
          distribution:
            field.type === FieldType.Continuous
              ? new Distribution.Continuous.Uniform(field.range)
              : field.type === FieldType.Date
              ? new Distribution.Date.Uniform(field.range, "YYYY/MM/DD HH:mm")
              : field.type === FieldType.Object
              ? new Distribution.Compound({
                  attributes: cast_attributes(field.fields),
                  rules: [],
                })
              : new Distribution.Discrete.Standard(field.range),
        };
      });
    }
    const attributes = cast_attributes(file.fields);
    const mocker = new Mocker({
      attributes,
      rules: [],
    });
    const data = mocker.create({
      count: 1e4,
      mode: DataMode.Table,
    });
    data?.forEach((value) => {
      objectIndices.forEach((index) => {
        value[index] = JSON.stringify(value[index]);
      });
    });
    dataset.name = sheetname;
    dataset.data = data;
    dataset.options = {};
    datasets.push(dataset);
  });

  const buffer = xlsx.build(datasets, {});

  fs.writeFile(path.resolve("./src/data/example2.xlsx"), buffer, (err: any) => {
    if (err) throw err;
  });
};

mock();
