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
 * The <code>AnnotatedMethodType</code> enum contains the types that can be used
 * to set the <code>type</code> property specified by the
 * <code>AnnotatedMethod</code> interface.
 */
export enum AnnotatedMethodType {
  
  /**
   * Specifies the type for a <code>@BeforeClass</code> annotation.
   */
  BEFORE_CLASS = 0,

  /**
   * Specifies the type for a <code>@AfterClass</code> annotation.
   */
  AFTER_CLASS = 1,

  /**
   * Specifies the type for a <code>@Before</code> annotation.
   */
  BEFORE = 2,

  /**
   * Specifies the type for a <code>@After</code> annotation.
   */
  AFTER = 3
}