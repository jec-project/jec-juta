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

import {RunableTestSuite} from "./RunableTestSuite";

/**
 * The <code>TestableMethod</code> defines the basic set of APIs you must  
 * implement to create wrappers for test and init methods of a test suite in the 
 * JUTA specification.
 */
export interface TestableMethod {
  
  /**
   * The name of this test method.
   */
  name:string;
  
  /**
   * The timeout for this test method. You typically use the timeout property to
   * set the max duration of an asynchronous test.
   */
  timeout:number;
  
  /**
   * Defines whether the method is asynchronous (<code>true</code>), or not
   * (<code>false</code>). Default value is <code>false</code>.
   */
  async:boolean;
  
  /**
   * Indicates whether the method has to be ignored (<code>true</code>), or 
   * not (<code>false</code>). Default value is <code>false</code>.
   */
  disabled:boolean;
}
