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
import {AnnotatedMethodType} from "../../../../../src/com/jec/juta/utils/AnnotatedMethodType";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/AnnotatedMethodTypeTestUtils";

// Test:
describe("AnnotatedMethodType", ()=> {

  describe("#BEFORE_CLASS", ()=> {
    it("BEFORE_CLASS should return 0", function() {
      expect(AnnotatedMethodType.BEFORE_CLASS).to.equal(utils.BEFORE_CLASS);
    });
  });
  
  describe("#AFTER_CLASS", ()=> {
    it("AFTER_CLASS should return 1", function() {
      expect(AnnotatedMethodType.AFTER_CLASS).to.equal(utils.AFTER_CLASS);
    });
  });
  
  describe("#BEFORE_ALL", ()=> {
    it("BEFORE_ALL should return 2", function() {
      expect(AnnotatedMethodType.BEFORE_ALL).to.equal(utils.BEFORE_ALL);
    });
  });
  
  describe("#AFTER_ALL", ()=> {
    it("AFTER_ALL should return 3", function() {
      expect(AnnotatedMethodType.AFTER_ALL).to.equal(utils.AFTER_ALL);
    });
  });
  
  describe("#BEFORE", ()=> {
    it("BEFORE should return 4", function() {
      expect(AnnotatedMethodType.BEFORE).to.equal(utils.BEFORE);
    });
  });
  
  describe("#AFTER", ()=> {
    it("AFTER should return 5", function() {
      expect(AnnotatedMethodType.AFTER).to.equal(utils.AFTER);
    });
  });
});