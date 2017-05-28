import {AbstractDecoratorConnector, Decorator} from "jec-commons";

export class TestConnector extends AbstractDecoratorConnector {
  
  constructor(jcadReference:string, decorator:Decorator) {
    super(jcadReference, decorator)
  }
}