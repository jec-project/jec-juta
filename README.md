# JEC JUTA Project

JEC JUTA is a [JavaScript Entreprise Container][jec-url] project focused on the portability of unit tests for JEC applications.

[![][jec-logo]][jec-url]

The `juta` package contains the abstration layer for creating Unit Testing
frameworks based on the JavaScript Unit Testing API (JUTA) specification.

JUTA allows developers to write portable unit tests, independently from the unit
testing framework they use. For example, the same test can be run from jasmine
or mocha without changing anyting within your test suites (e.g. imports).

JUTA test suites are written in [TypScript](https://www.typescriptlang.org/) and
are based on the same kind of annotations than [Junit](http://junit.org/junit4/).

With JUTA, test are more readable and become portable.

## Requirements

JEC JUTA needs the following system parameters in order to work correctly:

- Node 6+
- npm 3+
- TypeScript 2+

## Installation

Set up the JEC JUTA module with:

```bash
$ npm install jec-juta --save
```

## Using Components

All JEC JUTA components have to be imported with the ES6 syntax:

```javascript
import { TestSuite, Test } from "jec-juta";

@TestSuite({
  description: "Tests the \"HelloWorld\ class methods."
})
export class HelloWorldTest {
  
  @Test(
    description: "should say Hello to the world",
    repeat: 3
  )
  public sayHelloTest():void {
    // Test here...
  }
}
```

For a complete list of available components, please refer to the [API Reference](#api-reference) documentation.

## Running Tests

To execute all unit tests, use:

```bash
$ grunt test
```

## API Reference

The API Reference documentation is not included into the JEC JUTA node module. To build the API reference documentation, use:

```bash
$ grunt doc
```

Documentation will be generated in the `docs/api-reference` repository.
The online version of the  API reference documentation will be available soon at the JEC Website.

The documentation generator is [TypeDoc](http://typedoc.org/)

## Update Release Notes

**Current stable release:** [1.0.0](CHANGELOG.md#jec-juta-1.0.0)
 
For a complete listing of release notes for all JEC JUTA update releases, see the [CHANGELOG](CHANGELOG.md) file. 

## License
This JEC JUTA Project is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

```
Copyright 2016-2017 Pascal ECHEMANN.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[jec-url]: https://github.com/pechemann/JEC
[jec-logo]: https://raw.githubusercontent.com/pechemann/JEC/master/assets/jec-logos/jec-logo.png