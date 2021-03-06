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

import "mocha";
import * as sinon from "sinon";
import {JutaConnectorRefs} from "../../../../../src/com/jec/juta/jcad/JutaConnectorRefs";
import {DecoratorConnectorManager, JcadContextManager, JcadContext} from "jec-commons";

// Annotation to test:
import * as BeforeAnnotation from "../../../../../src/com/jec/juta/annotations/Before";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/BeforeTestUtils";

// Test:
describe("Before", ()=> {

  let context:JcadContext = null;
  let testInstance:any = null;

  let getContextSpy:any = null;
  let getDecoratorSpy:any = null;
  let decoratorSpy:any = null;
  let annotationSpy:any = null;

  before(()=> {
    context = utils.initContext();
    getContextSpy = sinon.spy(JcadContextManager.getInstance(), "getContext");
    getDecoratorSpy = 
             sinon.spy(DecoratorConnectorManager.getInstance(), "getDecorator");
    decoratorSpy = sinon.spy(utils.TEST_DECORATOR, "decorate");
    annotationSpy = sinon.spy(BeforeAnnotation, "Before");
  });

  after(()=> {
    utils.resetContext(context);
    sinon.restore();
    testInstance = null;
  });

  beforeEach(()=> {
    testInstance = utils.buildClassRef();
  });

  describe("@Before", ()=> {

    it("should invoke the JcadContextManager with the JutaConnectorRefs.BEFORE_CONNECTOR_REF reference", function() {
      sinon.assert.calledOnce(getContextSpy);
      sinon.assert.calledWith(
        getContextSpy, JutaConnectorRefs.BEFORE_CONNECTOR_REF
      );
    });
    
    it("should invoke the DecoratorConnectorManager with the JutaConnectorRefs.BEFORE_CONNECTOR_REF reference and the correct JCAD context", function() {
      sinon.assert.calledOnce(getDecoratorSpy);
      sinon.assert.calledWith(
        getDecoratorSpy,
        JutaConnectorRefs.BEFORE_CONNECTOR_REF, context
      );
    });
    
    it("should invoke the annotation decorator with the right parameters", function() {
      sinon.assert.calledOnce(annotationSpy);
      sinon.assert.calledWith(
        annotationSpy, utils.params.ANNOTATED_METHOD_PARAMS
      );
    });
    
    it("should invoke the registered decorator with the right method name and parameters", function() {
      sinon.assert.calledOnce(decoratorSpy);
    });
  });
});
