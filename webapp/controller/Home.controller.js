sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	var oRouter;
	return Controller.extend("utg.ui5-training.controller.Home", {
		onInit: function () {
			oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		onPressHR: function () {
			// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Employees");
		},

		onPressAdmin: function () {
			// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Products");
		}
	});
});