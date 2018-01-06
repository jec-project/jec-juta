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

/**
 * The <code>TestStats</code> defines the basic set of APIs you must implement 
 * to create object that information about test suite invocations for the JUTA
 * specification.
 */
export interface TestStats {

  /**
   * The number of test suites invoked by a test runner. Default value is
   * <code>0</code>.
   */
  numTestSuites:number;

  /**
   * The number of disabled test suites invoked by a test runner. Default value
   * is <code>0</code>.
   */
  numDisabledTestSuites:number;

  /**
   * The number of tests invoked by a test runner. Default value is
   * <code>0</code>.
   */
  numTests:number;

  /**
   * The number of disabled test cases for all of the test suites invoked by a
   * test runner. Default value is <code>0</code>.
   */
  numDisabledTests:number;

  /**
   * The number of asynchronous tests invoked by a test runner. Default value
   * is <code>0</code>.
   */
  numAsyncTests:number;

  /**
   * The duration of the test process, in milliseconds. Default value
   * is <code>0</code>.
   */
  duration:number;

  /**
   * The duration of the test process, in the format [mm:ss.SSS]. Default value
   * is <code>null</code>.
   */
  time:string;

  /**
   * Represents an error object defined only whether the test process fails due
   * to internal error. Default value is <code>null</code>.
   */
  error:any;
}
