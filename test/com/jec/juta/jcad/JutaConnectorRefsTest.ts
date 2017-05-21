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

// Test:
describe("JutaConnectorRefs", ()=> {

  describe("#TEST_CONNECTOR_REF", ()=> {
    it("TEST_CONNECTOR_REF should return 'com.jec.juta.annotations.Test'", function() {
      expect(JutaConnectorRefs.TEST_CONNECTOR_REF).to.equal(TEST_CONNECTOR_REF);
    });
  });
  
  describe("#TEST_SUITE_CONNECTOR_REF", ()=> {
    it("TEST_SUITE_CONNECTOR_REF should return 'com.jec.juta.annotations.TestSuite'", function() {
      expect(JutaConnectorRefs.TEST_SUITE_CONNECTOR_REF).to.equal(TEST_SUITE_CONNECTOR_REF);
    });
  });
  
  describe("#BEFORE_CLASS_CONNECTOR_REF", ()=> {
    it("BEFORE_CLASS_CONNECTOR_REF should return 'com.jec.juta.annotations.BeforeClass'", function() {
      expect(JutaConnectorRefs.BEFORE_CLASS_CONNECTOR_REF).to.equal(BEFORE_CLASS_CONNECTOR_REF);
    });
  });
  
  describe("#BEFORE_CONNECTOR_REF", ()=> {
    it("BEFORE_CONNECTOR_REF should return 'com.jec.juta.annotations.Before'", function() {
      expect(JutaConnectorRefs.BEFORE_CONNECTOR_REF).to.equal(BEFORE_CONNECTOR_REF);
    });
  });
  
  describe("#AFTER_CLASS_CONNECTOR_REF", ()=> {
    it("AFTER_CLASS_CONNECTOR_REF should return 'com.jec.juta.annotations.AfterClass'", function() {
      expect(JutaConnectorRefs.AFTER_CLASS_CONNECTOR_REF).to.equal(AFTER_CLASS_CONNECTOR_REF);
    });
  });
  
  describe("#AFTER_CONNECTOR_REF", ()=> {
    it("AFTER_CONNECTOR_REF should return 'com.jec.juta.annotations.After'", function() {
      expect(JutaConnectorRefs.AFTER_CONNECTOR_REF).to.equal(AFTER_CONNECTOR_REF);
    });
  });
});

// Utilities:
// We store constants that should be defined by the JutaConnectorRefs class:
const TEST_CONNECTOR_REF:string = "com.jec.juta.annotations.Test";
const TEST_SUITE_CONNECTOR_REF:string = "com.jec.juta.annotations.TestSuite";
const BEFORE_CLASS_CONNECTOR_REF:string = "com.jec.juta.annotations.BeforeClass";
const BEFORE_CONNECTOR_REF:string = "com.jec.juta.annotations.Before";
const AFTER_CLASS_CONNECTOR_REF:string = "com.jec.juta.annotations.AfterClass";
const AFTER_CONNECTOR_REF:string = "com.jec.juta.annotations.After";