/*
CommonJS Modules
-Standard created for Node.js
-Load modules using the require method
-Uses an exports variable to determine exports


ESM Modules (ECMAScript Modules)
-Load modules using the import keyword
-Uses the export keyword to determine modules

CommonJS example:
const fs = require("node:fs/promises");
const localFile = require("./myFile");
const sampleJSON = require("./sample.json");

const loadData = async () => {
  const data = await fs.readFile("./data.json");
  return JSON.parse(data);
};

module.exports.jsonData = sampleJSON;
module.exports.loadData = loadData;


ESM example:
import { readFile } from "node:fs/promises";
import * as local from "./myFile.js";
import sampleJSON from "./sample.json" assert { type: "json" };

const loadData = async () => {
  const data = await fs.readFile("./data.json");
  return JSON.parse(data);
};

export {
  jsonData: sampleJSON,
  loadData
};


Package Manager
a tool that enables you to install and manage software written by other developers
into your own software projects.

Options:
Package management clients:
npm
yarn
pnpm

Registries
npm

  */
