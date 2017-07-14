//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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
import {expect} from "chai";

// Class to test:
import {JutaConnectorRefs} from "../../../../../src/com/jec/juta/jcad/JutaConnectorRefs";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/JutaConnectorRefsTestUtils";

// Test:
describe("JutaConnectorRefs", ()=> {

  describe("#TEST_CONNECTOR_REF", ()=> {
    it("TEST_CONNECTOR_REF should return 'com.jec.juta.annotations.Test'", function() {
      expect(JutaConnectorRefs.TEST_CONNECTOR_REF).to.equal(utils.TEST_CONNECTOR_REF);
    });
  });
  
  describe("#TEST_SUITE_CONNECTOR_REF", ()=> {
    it("TEST_SUITE_CONNECTOR_REF should return 'com.jec.juta.annotations.TestSuite'", function() {
      expect(JutaConnectorRefs.TEST_SUITE_CONNECTOR_REF).to.equal(utils.TEST_SUITE_CONNECTOR_REF);
    });
  });
  
  describe("#BEFORE_CLASS_CONNECTOR_REF", ()=> {
    it("BEFORE_CLASS_CONNECTOR_REF should return 'com.jec.juta.annotations.BeforeClass'", function() {
      expect(JutaConnectorRefs.BEFORE_CLASS_CONNECTOR_REF).to.equal(utils.BEFORE_CLASS_CONNECTOR_REF);
    });
  });

  describe("#BEFORE_ALL_CONNECTOR_REF", ()=> {
    it("BEFORE_ALL_CONNECTOR_REF should return 'com.jec.juta.annotations.BeforeAll'", function() {
      expect(JutaConnectorRefs.BEFORE_ALL_CONNECTOR_REF).to.equal(utils.BEFORE_ALL_CONNECTOR_REF);
    });
  });
  
  describe("#BEFORE_CONNECTOR_REF", ()=> {
    it("BEFORE_CONNECTOR_REF should return 'com.jec.juta.annotations.Before'", function() {
      expect(JutaConnectorRefs.BEFORE_CONNECTOR_REF).to.equal(utils.BEFORE_CONNECTOR_REF);
    });
  });
  
  describe("#AFTER_CLASS_CONNECTOR_REF", ()=> {
    it("AFTER_CLASS_CONNECTOR_REF should return 'com.jec.juta.annotations.AfterClass'", function() {
      expect(JutaConnectorRefs.AFTER_CLASS_CONNECTOR_REF).to.equal(utils.AFTER_CLASS_CONNECTOR_REF);
    });
  });

  describe("#AFTER_ALL_CONNECTOR_REF", ()=> {
    it("AFTER_ALL_CONNECTOR_REF should return 'com.jec.juta.annotations.AfterAll'", function() {
      expect(JutaConnectorRefs.AFTER_ALL_CONNECTOR_REF).to.equal(utils.AFTER_ALL_CONNECTOR_REF);
    });
  });
  
  describe("#AFTER_CONNECTOR_REF", ()=> {
    it("AFTER_CONNECTOR_REF should return 'com.jec.juta.annotations.After'", function() {
      expect(JutaConnectorRefs.AFTER_CONNECTOR_REF).to.equal(utils.AFTER_CONNECTOR_REF);
    });
  });

  describe("#ASYNC_CONNECTOR_REF", ()=> {
    it("ASYNC_CONNECTOR_REF should return 'com.jec.juta.annotations.Async'", function() {
      expect(JutaConnectorRefs.ASYNC_CONNECTOR_REF).to.equal(utils.ASYNC_CONNECTOR_REF);
    });
  });
});
