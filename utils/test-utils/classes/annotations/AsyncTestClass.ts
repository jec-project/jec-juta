import {Async} from "../../../../src/com/jec/juta/annotations/Async";

export class AsyncTestClass {

  public asyncMethodToTest(@Async callback:(err:any)=>void):void {
    callback(null);
  }
}