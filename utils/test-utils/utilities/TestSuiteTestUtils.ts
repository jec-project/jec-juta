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

import {ClassLoader, DecoratorConnectorManager, JcadContextManager,
        AbstractDecoratorConnector, Decorator, JcadContextFactory,
        DecoratorConnector, JcadContext, DefaultClassLoader} from "jec-commons";
import {TestSuiteParams} from "../../../src/com/jec/juta/annotations/core/TestSuiteParams";
import {JutaConnectorRefs} from "../../../src/com/jec/juta/jcad/JutaConnectorRefs";
import {TestConnector} from "../classes/TestConnector";

/*!
 * This module constains utilities used by the TestSuiteTest test suite.
 */

// Utilities:
const LOADER:ClassLoader = new DefaultClassLoader();
const VALID_CLASS:string = process.cwd() + "/utils/test-utils/classes/annotations/TestSuiteTestClass";
export const params:any = require("./ParamUtils");
class TestDecorator implements Decorator {
   decorate(target:any, params:TestSuiteParams):any { return target; }
}
export const TEST_DECORATOR:Decorator = new TestDecorator();
export const buildClassRef:Function = function():void {
  let ClassRef:any = LOADER.loadClass(VALID_CLASS);
  new ClassRef();
};
export const initContext:Function = function():JcadContext {
  let factory:JcadContextFactory = new JcadContextFactory();
  let connector = new TestConnector(JutaConnectorRefs.TEST_SUITE_CONNECTOR_REF, TEST_DECORATOR);
  let context:JcadContext = factory.create();
  DecoratorConnectorManager.getInstance().addConnector(connector, context);
  JcadContextManager.getInstance().addContext(JutaConnectorRefs.TEST_SUITE_CONNECTOR_REF, context);
  return context;
}
export const resetContext:Function = function(context:JcadContext):void {
  JcadContextManager.getInstance().removeContext(JutaConnectorRefs.TEST_SUITE_CONNECTOR_REF);
  DecoratorConnectorManager.getInstance().removeConnector(JutaConnectorRefs.TEST_SUITE_CONNECTOR_REF, context);
  context = null;
}
