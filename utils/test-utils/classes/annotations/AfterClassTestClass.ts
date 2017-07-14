import {AfterClass} from "../../../../src/com/jec/juta/annotations/AfterClass";
import * as params from "../../utilities/ParamUtils";

export class AfterClassTestClass {

  @AfterClass(params.ANNOTATED_METHOD_PARAMS)
  public static afterClassMethod():void { }
}