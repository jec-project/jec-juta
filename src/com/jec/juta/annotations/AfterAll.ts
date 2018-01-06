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

import {AnnotatedMethodParams} from "./core/AnnotatedMethodParams";
import {JutaConnectorRefs} from "../jcad/JutaConnectorRefs";
import {JcadContext, JcadContextManager, DecoratorConnectorManager} from "jec-commons";

////////////////////////////////////////////////////////////////////////////////
// JCAD API API
////////////////////////////////////////////////////////////////////////////////

const DCM:DecoratorConnectorManager = DecoratorConnectorManager.getInstance();
const CTXM:JcadContextManager = JcadContextManager.getInstance();

/**
 * The <code>AfterAll</code> decorator defines a method in the JUTA API which 
 * is called one time after all tests run.
 * 
 * ```javascript
AfterAll()
public afterAllMethod():void {
  // Config here...
}
```
 * 
 * @param {AnnotatedMethodParams} params the parameters for the associated
 *                                       method.
 */
export function AfterAll(params?:AnnotatedMethodParams):Function {
  
  return function(target:any, key:string,
                                       descriptor:PropertyDescriptor):Function {
    
    ////////////////////////////////////////////////////////////////////////////
    // JCAD API
    ////////////////////////////////////////////////////////////////////////////

    var ctx:JcadContext =
                     CTXM.getContext(JutaConnectorRefs.AFTER_ALL_CONNECTOR_REF);
    return DCM.getDecorator(JutaConnectorRefs.AFTER_ALL_CONNECTOR_REF, ctx)
              .decorate(target, key, descriptor, params);
  }
}
