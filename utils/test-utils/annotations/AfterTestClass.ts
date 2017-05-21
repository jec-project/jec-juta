import {After} from "../../../src/com/jec/juta/annotations/After";
import * as params from "./Params";

export class AfterTestClass {

  @After(params.ANNOTATED_METHOD_PARAMS)
  public afterMethod():void { }
}