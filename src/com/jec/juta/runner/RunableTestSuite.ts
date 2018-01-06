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

import {TestMethod} from "./TestMethod";
import {AnnotatedMethod} from "./AnnotatedMethod";

/**
 * The <code>RunableTestSuite</code> interface provides the default API that you 
 * must implement to create a test class for proxifying JUTA test suite classes.
 */
export interface RunableTestSuite {

  /**
   * Returns the test suite class associated with this
   * <code>RunableTestSuite</code>.
   *
   * @return {any} the reference to the test suite class associated  with this
   *               <code>RunableTestSuite</code>.
   */
  getTestSuite():any;

  /**
   * Sets the test suite class to associate with this
   * <code>RunableTestSuite</code>.
   *
   * @param {any} testSuite the test suite class to associate with this 
   *                        <code>RunableTestSuite</code>.
   */
  setTestSuite(testSuite:any):void;

  /**
   * Returns the collection of test methods associated with this
   * <code>RunableTestSuite</code>.
   *
   * @return {Array<TestMethod>} the collection of test methods associated with 
   *                             this <code>RunableTestSuite</code>.
   */
   getTestMethods():TestMethod[];

  /**
   * Returns the description of the test suite class associated with this
   * <code>RunableTestSuite</code>.
   *
   * @return {string} the description of the test suite class associated with 
   *                  this <code>RunableTestSuite</code>.
   */
  getDescription():string;

  /**
   * Returns the collection of annotated methods associated with this
   * <code>RunableTestSuite</code>.
   *
   * @return {Array<AnnotatedMethod>} the collection of annotated methods 
   *                                  associated with this
   *                                  <code>RunableTestSuite</code>.
   */
  getAnnotatedMethods():AnnotatedMethod[];

  /**
   * Returns a boolean that indicates whether this <code>RunableTestSuite</code>
   * has to be ignored by the test runner (<code>true</code>), or not
   * (<code>false</code>).
   *
   * @return {boolean} <code>true</code> whether this
   *                   <code>RunableTestSuite</code> has to be ignored by the
   *                   test runner; <code>false</code> otherwhise.
   */
  isDisabled():boolean;
  
  /**
   * Returns a value that indicates the test execution order for a test suite.
   * Possible values are the constants of the <code>TestSorters</code> enum.
   *
   * @return {number} a constant of the <code>TestSorters</code> enum.
   */
  getTestOrder():number;
    
  /**
   * Returns a value the policy used to create test class instances. Valid 
   * values are the constants of the <code>InstantiationPolicy</code> class.
   *
   * @return {string} a constant of the <code>InstantiationPolicy</code> class.
   */
  getInstantiationPolicy():string;
}
