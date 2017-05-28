import {Before} from "../../../../src/com/jec/juta/annotations/Before";
import * as params from "../../utilities/ParamUtils";

export class BeforeTestClass {

  @Before(params.ANNOTATED_METHOD_PARAMS)
  public beforeMethod():void { }
}