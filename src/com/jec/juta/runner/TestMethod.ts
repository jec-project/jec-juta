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

import {RunableTestSuite} from "./RunableTestSuite";

/**
 * The <code>TestMethod</code> defines the basic set of APIs you must implement 
 * to create wrappers for testing methods of a test suite in the JUTA
 * specification.
 */
export interface TestMethod {

  /**
   * Defines the description of this test method.
   */
  description:string;
  
  /**
   * The name of this test method.
   */
  name:string;
}
