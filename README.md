
# Typescript Mock Generator

[![Build Status](https://travis-ci.com/Matju-M/Mang.Mock-Generator.svg?token=6znnpbkcfbTWdET8AcgS&branch=master)](https://travis-ci.com/Matju-M/Mang.Mock-Generator)
[![npm version](https://img.shields.io/npm/v/@mangm/ts-mock-generator.svg)](https://www.npmjs.com/package/@mangm/ts-mock-generator)


This library generates mock data from Typescript interfaces.


```js
import { Generator, Configuration } from "@mangm/ts-mock-generator";

const generator = new Generator("./tsconfig.json");
const config: Configuration = {
	includeAllProps: true, // this will include only optional data: defaults to false
	maxRecursiveLoop: 2 // this will create only one recursive iteration if parent and child have the same interface: defaults to 1
};
const data = generator.generate("test.model.ts", "Hero",  config);
	
```

Output: 
```js
{
	"id": -1,
	"name": "[MOCK]",
	"code": "[MOCK]",
	"sortOrder": -1,
	"heroTypeIds": [-1],
	"countryId": -1
}
```

### Installation
Install `ts-mock-generator` via npm:

	npm i @mangm/ts-mock-generator

This package internally uses [ts-morph](https://github.com/dsherret/ts-morph).
