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
 * The <code>AnnotatedMethod</code> defines the basic set of APIs you must 
 * implement to create wrappers for adding initialization methods to a test 
 * suite in the JUTA specification.
 */
export interface AnnotatedMethod {

  /**
   * The name of this annotated method.
   */
  name:string;
  
  /**
   * The timeout for this annotated method.
   */
  timeout:number;
  
  /**
   * Defines the type of this annotated method. Valid values are constants of
   * the <code>AnnotatedMethodType</code> enum.
   */
  type:number;
}