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

import {AnnotatedMethodParams} from "../../../src/com/jec/juta/annotations/core/AnnotatedMethodParams";
import {TestParams} from "../../../src/com/jec/juta/annotations/core/TestParams";
import {TestSuiteParams} from "../../../src/com/jec/juta/annotations/core/TestSuiteParams";

export const ANNOTATED_METHOD_PARAMS:AnnotatedMethodParams = {
  timeout: 100
};

export const TEST_PARAMS:TestParams = {
  timeout: 100,
  description: "Test Params Description",
  repeat: 3
};

export const TEST_SUITE_PARAMS:TestSuiteParams = {
  description: "Test Suite Params Description"
};
