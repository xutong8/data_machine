import xlsx from "node-xlsx";
import fs from "fs";
import path from "path";

const workSheetsFromBuffer = xlsx.parse(
  fs.readFileSync(path.resolve("./src/data/example2.xlsx"))
);

// example.xlsx中第一个工作表中是数据说明部分，所以索引从1开始
const tables = workSheetsFromBuffer.slice();

// 第一步，先得到所有的keys
const headersSet = new Set();
const items = [] as { [key: string]: string }[];
tables.forEach((table) => {
  const data = table.data as string[][];
  const headers = data[0];
  headers.forEach((header) => {
    headersSet.add(header);
  });
  const records = data.slice(1);
  const item = {} as { [key: string]: string };
  records.forEach((record) => {
    record.forEach((column, index) => {
      item[headers[index]] = column;
    });
    items.push(item);
  });
});

// 去重后的keys
const headers = Array.from(headersSet) as string[];
items.forEach((item) => {
  headers.forEach((header) => {
    if (item && item.hasOwnProperty(header)) return;
    item[header] = "";
  });
});

// 将对象转换为数组
const newRecords = [] as string[][];
items.forEach((item) => {
  const newRecord = [] as string[];
  headers.forEach((header) => {
    newRecord.push(item[header]);
  });
  newRecords.push(newRecord);
});

const newTables = [headers, ...newRecords] as string[][];

const buffer = xlsx.build(
  [{ name: "totalDataset", data: newTables, options: {} }],
  {}
);

fs.writeFile(path.resolve('./src/data/example3.xlsx'), buffer, (err: any) => {
  if(err) throw err;
});