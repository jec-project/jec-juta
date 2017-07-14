import {BeforeClass} from "../../../../src/com/jec/juta/annotations/BeforeClass";
import * as params from "../../utilities/ParamUtils";

export class BeforeClassTestClass {

  @BeforeClass(params.ANNOTATED_METHOD_PARAMS)
  public static beforeClassMethod():void { }
}