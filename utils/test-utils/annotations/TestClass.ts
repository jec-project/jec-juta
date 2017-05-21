import {Test} from "../../../src/com/jec/juta/annotations/Test";
import * as params from "./Params";

export class TestClass {

  @Test(params.TEST_PARAMS)
  public methodToTest():void { }
}