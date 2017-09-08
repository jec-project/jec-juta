# JEC JUTA Project: Update Release Notes

<a name="jec-juta-1.1.6"></a>
## **1.1.6** (2017-09-06)

### Bug Fixes

### Features

- Dependencies upgrade

<a name="jec-juta-1.1.5"></a>
## **1.1.5** (2017-08-20)

### Bug Fixes

- **postinstall**: removing the post install script

### Features

- **dist**: adding binaries to the `dist` folder

<a name="jec-juta-1.1.4"></a>
## **1.1.4** (2017-08-20)

### Bug Fixes

### Features

- Fixing peer dependencies for GlassCat alpha releases integration

<a name="jec-juta-1.1.3"></a>
## **1.1.3** (2017-08-16)

### Bug Fixes

### Features

- **build**: adding build script to npm install process for GlassCat instal optimisation
- **index.ts**: refactoring index.ts file for better types generation
- Dependencies upgrade

<a name="jec-juta-1.1.2"></a>
## **1.1.2** (2017-07-17)

### Bug Fixes

- **InstantiationPolicy**: all "Instantiation" term references have been fixed from french to english

### Features

<a name="jec-juta-1.1.1"></a>
## **1.1.1** (2017-06-07)

### Bug Fixes

### Features

- **instantiationPolicy**: new `instantiationPolicy` parameter in the `TestSuiteParams` interface
- **InstantiationPolicy**: new `InstantiationPolicy` static class in the `com.jec.juta.utils` package
- **@AfterClass**: refactoring of the `@AfterClass` decorator
- **@BeforeClass**: refactoring of the `@BeforeClass` decorator

<a name="jec-juta-1.1.0"></a>
## **1.1.0** (2017-05-06)

### Bug Fixes

### Features

- **@AfterAll, @BeforeAll**: new annotations for declaring test fixtures
- **@AfterClass, @BeforeClass**: boths annotations are now associated with static methods

<a name="jec-juta-1.0.3"></a>
## **1.0.3** (2017-06-05)

### Bug Fixes

### Features

- Dependencies upgrade

<a name="jec-juta-1.0.2"></a>
## **1.0.2** (2017-06-05)

### Bug Fixes

### Features

- **TestStats**: the TestStats interface provides information about the current test process

<a name="jec-juta-1.0.1"></a>
## **1.0.1** (2017-05-28)

### Bug Fixes

- **test**: include "utils" folder into TypeScript unit tests generation
- **typings**: fixies the link to the definition types
- **module**: fixies the link to the module definition

### Features

- **test repetitions**: add test repetitions for @Test annotations
- **test utilities**: new utility files have been added to make test suites more readable
- **@Async**: new annotation for declaring asynchrounous tests
- **disabled**: indicates whether test methods and test suites have to be ignored or not
- **TestSorters**: the API provides utilities for changing the test execution order

<a name="jec-juta-1.0.0"></a>
## **1.0.0** (2017-05-21)

### Bug Fixes

### Features

- Initial release of the JEC JavaScript Unit Testing API *(JUTA)* module
- **juta**: contains the JEC JUTA API