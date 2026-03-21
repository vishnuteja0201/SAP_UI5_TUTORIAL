sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (Controller, MessageToast, JSONModel, ResourceModel) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App",{

        onInit(){
            console.log("start of onInit() .........!!!");

            const oModel = new JSONModel({
                recipient: {
                    name: "Enter Your Name!"
                }
            });
            this.getView().setModel(oModel);

            const i18nModel = new ResourceModel({
                bundleName: "ui5.walkthrough.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");

            console.log("End of onInit() .........!!!");
        },

        onShowHello(){
            //"Read msg from i18n model"
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg",[sRecipient]);
            //show message
            MessageToast.show(sMsg);
        },

        onBye(){
            //show a native JavaScipt alert
            alert("seee you soon");
            console.log("End of controller.js.........!!!");

        }


    });
}

)