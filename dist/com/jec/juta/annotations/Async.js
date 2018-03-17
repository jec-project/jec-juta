"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JutaConnectorRefs_1 = require("../jcad/JutaConnectorRefs");
const jec_commons_1 = require("jec-commons");
const DCM = jec_commons_1.DecoratorConnectorManager.getInstance();
const CTXM = jec_commons_1.JcadContextManager.getInstance();
function Async(target, propertyKey, parameterIndex) {
    const ctx = CTXM.getContext(JutaConnectorRefs_1.JutaConnectorRefs.ASYNC_CONNECTOR_REF);
    DCM.getDecorator(JutaConnectorRefs_1.JutaConnectorRefs.ASYNC_CONNECTOR_REF, ctx)
        .decorate(target, propertyKey, parameterIndex);
}
exports.Async = Async;
