import {BeforeClass} from "../../../../src/com/jec/juta/annotations/BeforeClass";
import * as params from "../../utilities/ParamUtils";

export class AfterClassTestClass {

  @BeforeClass(params.ANNOTATED_METHOD_PARAMS)
  public beforeClassMethod():void { }
}