"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JutaConnectorRefs_1 = require("../jcad/JutaConnectorRefs");
const jec_commons_1 = require("jec-commons");
const DCM = jec_commons_1.DecoratorConnectorManager.getInstance();
const CTXM = jec_commons_1.JcadContextManager.getInstance();
function After(params) {
    return function (target, key, descriptor) {
        var ctx = CTXM.getContext(JutaConnectorRefs_1.JutaConnectorRefs.AFTER_CONNECTOR_REF);
        return DCM.getDecorator(JutaConnectorRefs_1.JutaConnectorRefs.AFTER_CONNECTOR_REF, ctx)
            .decorate(target, key, descriptor, params);
    };
}
exports.After = After;