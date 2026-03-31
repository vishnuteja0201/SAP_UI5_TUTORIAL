sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], (Controller, JSONModel, Filter, FilterOperator) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
		onInit() {
			const oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},

		 onFilterInvoices(oEvent){
			//build filter array
			const afilter = [];
			const sQuery = oEvent.getParameter("query");
			if(sQuery){
				afilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}
			console.log(afilter);

			//filter binding
			const oList = this.byId("InvoiceList");
			const oBinding = oList.getBinding("items");
			oBinding.filter(afilter);
			//console.log(oEvent);
		}
	});
});