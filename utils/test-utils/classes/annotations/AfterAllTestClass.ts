import {AfterAll} from "../../../../src/com/jec/juta/annotations/AfterAll";
import * as params from "../../utilities/ParamUtils";

export class AfterAllTestClass {

  @AfterAll(params.ANNOTATED_METHOD_PARAMS)
  public afterAllMethod():void { }
}