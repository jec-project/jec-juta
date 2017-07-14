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

/**
 * The <code>InstanciationPolicy</code> class contains constant values that are
 * used to specify the way a test runner instantiate test classes. You use
 * <code>InstanciationPolicy</code> constant to set the
 * <code>instanciationPolicy</code> property of the <code>TestSuiteParams</code>
 * interface.
 */
export class InstanciationPolicy {

  /**
   * Indicates that the test runner creates a new instance of the test class for
   * each <code>@Test</code> annotation.
   */
  public static readonly MULTIPLE:string = "multiple";
  
  /**
   * Indicates that the test runner creates a single instance of the test class 
   * for all <code>@Test</code> annotations.
   */
  public static readonly SINGLE:string = "single";
}