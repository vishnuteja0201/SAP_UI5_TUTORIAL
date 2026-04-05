sap.ui.define([
    "../localService/mockserver"
], (mockserver) => {
    "use strict";

    //start mock server before loading component
    mockserver.init();

    //Load UI5 component
    sap.ui.require(["sap/ui/core/ComponentSupport"]);

});