import {BeforeAll} from "../../../../src/com/jec/juta/annotations/BeforeAll";
import * as params from "../../utilities/ParamUtils";

export class BeforeAllTestClass {

  @BeforeAll(params.ANNOTATED_METHOD_PARAMS)
  public beforeAllMethod():void { }
}