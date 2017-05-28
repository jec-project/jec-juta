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
  timeout: 100,
  description: "Test Suite Params Description"
};

