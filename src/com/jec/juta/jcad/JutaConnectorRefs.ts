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
 * The <code>JutaConnectorRefs</code> class provides static constants that 
 * define the references of the JUTA decorator connectors.
 */
export class JutaConnectorRefs {
  
  /**
   * Defines the reference for connectors tha must be used to interact with the
   * <code>@Test</code>  decorator.
   */
  public static readonly TEST_CONNECTOR_REF:string =
                                                "com.jec.juta.annotations.Test";
  
  /**
   * Defines the reference for connectors tha must be used to interact with the
   * <code>@TestSuite</code> decorator.
   */
  public static readonly TEST_SUITE_CONNECTOR_REF:string =
                                           "com.jec.juta.annotations.TestSuite";
  
  /**
   * Defines the reference for connectors tha must be used to interact with the
   * <code>@BeforeAll</code> decorator.
   */
  public static readonly BEFORE_ALL_CONNECTOR_REF:string =
                                           "com.jec.juta.annotations.BeforeAll";
  
  /**
   * Defines the reference for connectors tha must be used to interact with the
   * <code>@Before</code> decorator.
   */
  public static readonly BEFORE_CONNECTOR_REF:string =
                                              "com.jec.juta.annotations.Before";

  /**
   * Defines the reference for connectors tha must be used to interact with the
   * <code>@AfterAll</code> decorator.
   */
  public static readonly AFTER_ALL_CONNECTOR_REF:string =
                                            "com.jec.juta.annotations.AfterAll";
  
  /**
   * Defines the reference for connectors tha must be used to interact with the
   * <code>@After</code> decorator.
   */
  public static readonly AFTER_CONNECTOR_REF:string =
                                               "com.jec.juta.annotations.After";
  
  /**
   * Defines the reference for connectors tha must be used to interact with the
   * <code>@Async</code> decorator.
   */
  public static readonly ASYNC_CONNECTOR_REF:string =
                                               "com.jec.juta.annotations.Async";
                                               
}
