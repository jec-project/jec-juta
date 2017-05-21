import {AfterClass} from "../../../src/com/jec/juta/annotations/AfterClass";
import * as params from "./Params";

export class AfterClassTestClass {

  @AfterClass(params.ANNOTATED_METHOD_PARAMS)
  public afterClassMethod():void { }
}