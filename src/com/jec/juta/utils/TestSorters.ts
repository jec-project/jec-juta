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
 * The <code>TestSorters</code> enum contains the values that can be used to
 * change the test execution order.
 */
export enum TestSorters {
  
  /**
   * Specifies that the test runner use the default mechanism, which is a 
   * deterministic, but not predictable, order.
   */
  DEFAULT = 0,

  /**
   * Sorts the test methods by method name, in lexicographic order.
   */
  NAME_ASCENDING = 1,

  /**
   * Sorts the test methods by method name, in inverted lexicographic order.
   */
  NAME_DESCENDING = 2,
  
  /**
   * Sorts the test methods by using the <code>order</code> parameter of the
   * <code>TestParams</code> interface, from lower to higher value.
   */
  ORDER_ASCENDING = 3,

  /**
   * Sorts the test methods by using the <code>order</code> parameter of the
   * <code>TestParams</code> interface, from higher to lower value.
   */
  ORDER_DESCENDING = 4
}