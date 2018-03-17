//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {TestSuiteParams} from "./core/TestSuiteParams";
import {JutaConnectorRefs} from "../jcad/JutaConnectorRefs";
import {JcadContext, JcadContextManager, DecoratorConnectorManager} from "jec-commons";

////////////////////////////////////////////////////////////////////////////////
// JCAD API
////////////////////////////////////////////////////////////////////////////////

const DCM:DecoratorConnectorManager = DecoratorConnectorManager.getInstance();
const CTXM:JcadContextManager = JcadContextManager.getInstance();

/**
 * The <code>TestSuite</code> decorator defines a test suite in the JUTA
 * specification.
 *
 * ```javascript
TestSuite({
  description: "Test all methods of the 'MyClass' class"
})
export class MyClassTest() {
  // Test here...
}
```
 *
 * @param {TestSuiteParams} params the parameters for the associated test.
 */
export function TestSuite(params:TestSuiteParams):Function {
  
  return function(target:any):Function {

    ////////////////////////////////////////////////////////////////////////////
    // JCAD API
    ////////////////////////////////////////////////////////////////////////////

    const ctx:JcadContext =
                    CTXM.getContext(JutaConnectorRefs.TEST_SUITE_CONNECTOR_REF);
    return DCM.getDecorator(JutaConnectorRefs.TEST_SUITE_CONNECTOR_REF, ctx)
              .decorate(target, params);
  }
}
