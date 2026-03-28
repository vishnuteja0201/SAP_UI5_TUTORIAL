sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.HelloPanel",{
        
        onShowHello(){
            //"Read msg from i18n model"
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg",[sRecipient]);
            //show message
            MessageToast.show(sMsg);
        },

        async onOpenDialog(){
            //create dialog lazily
            this.oDialog??= await this.loadFragment({
                name: "ui5.walkthrough.view.HelloDialog"
            });
            this.oDialog.open();
        },
        onCloseDialog() {
            this.oDialog.close();
        },

        onBye(){
            //show a native JavaScipt alert
            alert("seee you soon");
            console.log("End of controller.js.........!!!");

        }


    });
}

)