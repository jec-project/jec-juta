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
import {expect} from "chai";

// Class to test:
import {TestSorters} from "../../../../../src/com/jec/juta/utils/TestSorters";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/TestSortersTestUtils";

// Test:
describe("TestSorters", ()=> {

  describe("#DEFAULT", ()=> {
    it("DEFAULT should return 0", function() {
      expect(TestSorters.DEFAULT).to.equal(utils.DEFAULT);
    });
  });
  
  describe("#NAME_ASCENDING", ()=> {
    it("NAME_ASCENDING should return 1", function() {
      expect(TestSorters.NAME_ASCENDING).to.equal(utils.NAME_ASCENDING);
    });
  });
  
  describe("#NAME_DESCENDING", ()=> {
    it("NAME_ASCENDING should return 2", function() {
      expect(TestSorters.NAME_DESCENDING).to.equal(utils.NAME_DESCENDING);
    });
  });
  
  describe("#ORDER_ASCENDING", ()=> {
    it("ORDER_ASCENDING should return 3", function() {
      expect(TestSorters.ORDER_ASCENDING).to.equal(utils.ORDER_ASCENDING);
    });
  });
  
  describe("#ORDER_DESCENDING", ()=> {
    it("ORDER_DESCENDING should return 4", function() {
      expect(TestSorters.ORDER_DESCENDING).to.equal(utils.ORDER_DESCENDING);
    });
  });
});