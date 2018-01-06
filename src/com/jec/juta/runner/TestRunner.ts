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
import {TestStats} from "./TestStats";

/**
 * The <code>TestRunner</code> defines the basic set of APIs you must implement 
 * to create test runner objects for the JUTA specification.
 */
export interface TestRunner {

  /**
   * Performs testing operations for the specified test suite.
   * 
   * @param {RunableTestSuite} testSuite the reference to the test suite to
   *                                     execute.
   * @param {Function} callback the callback method called an the end of the
   *                            process. This function takes a
   *                            <code>TestStats</code> object parameter which
   *                            contains informations about the test suites
   *                            invocation, including an error message whether 
   *                            the process failed.
   */
  runTest(testSuite:RunableTestSuite, callback:(stats:TestStats)=>void):void;
  
  /**
   * Performs testing operations for all of the specified test suite in the
   * <code>testSuiteColl</code> parameter.
   * 
   * @param {RunableTestSuite[]} testSuiteColl a collection that contains the
   *                                           reference to the test suites to
   *                                           execute.
   * @param {Function} callback the callback method called an the end of the
   *                            process. This function takes a
   *                            <code>TestStats</code> object parameter which
   *                            contains informations about the test suites
   *                            invocation, including an error message whether 
   *                            the process failed.
   */
  runAllTests(testSuiteColl:RunableTestSuite[],
                                         callback:(stats:TestStats)=>void):void;
}
