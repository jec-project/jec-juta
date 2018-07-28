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
        Decorator, JcadContextFactory, JcadContext, DefaultClassLoader} from "jec-commons";
import {AnnotatedMethodParams} from "../../../src/com/jec/juta/annotations/core/AnnotatedMethodParams";
import {JutaConnectorRefs} from "../../../src/com/jec/juta/jcad/JutaConnectorRefs";
import {TestConnector} from "../classes/TestConnector";

/*!
 * This module constains utilities used by the BeforeClassTest test suite.
 */

// Utilities:
const LOADER:ClassLoader = new DefaultClassLoader();
const VALID_CLASS:string = process.cwd() + "/utils/test-utils/classes/annotations/BeforeClassTestClass";
export const params:any = require("./ParamUtils");
class TestDecorator implements Decorator {
  decorate(target:any, key:string, descriptor:PropertyDescriptor,
           params?:AnnotatedMethodParams):any { return target; }
}
export const TEST_DECORATOR:Decorator = new TestDecorator();
export const KEY:string = "beforeClassMethod";
export const buildClassRef:Function = function():any {
  const ClassRef:any = LOADER.loadClass(VALID_CLASS);
  return new ClassRef();
};
export const initContext:Function = function():JcadContext {
  const factory:JcadContextFactory = new JcadContextFactory();
  const connector = new TestConnector(JutaConnectorRefs.BEFORE_CLASS_CONNECTOR_REF, TEST_DECORATOR);
  const context:JcadContext = factory.create();
  DecoratorConnectorManager.getInstance().addConnector(connector, context);
  JcadContextManager.getInstance().addContext(JutaConnectorRefs.BEFORE_CLASS_CONNECTOR_REF, context);
  return context;
}
export const resetContext:Function = function(context:JcadContext):void {
  JcadContextManager.getInstance().removeContext(JutaConnectorRefs.BEFORE_CLASS_CONNECTOR_REF);
  DecoratorConnectorManager.getInstance().removeConnector(JutaConnectorRefs.BEFORE_CLASS_CONNECTOR_REF, context);
  context = null;
}
