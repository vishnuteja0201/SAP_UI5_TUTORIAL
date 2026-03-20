sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App",{

        onInit(){
            console.log("start of onInit() .........!!!");

            const oModel = new JSONModel({
                recipient: {
                    name: "world"
                }
            });
            this.getView().setModel(oModel);

            console.log("End of onInit() .........!!!");
        },

        onShowHello(){
            MessageToast.show("Hello Vishnu");
        },

        onBye(){
            //show a native JavaScipt alert
            alert("seee you soon");
            console.log("Entered in controller.js.........!!!");

        }


    });
    
}

)