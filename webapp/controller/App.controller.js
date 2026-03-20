sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App",{
        onShowHello(){
            //show a native JavaScipt alert
            alert("Hello world");
        },

        onBye(){
            //show a native JavaScipt alert
            alert("seee you soon");
        }

    });
}

)