sap.ui.define([
	"jquery.sap.global",
	"sap/ui/Device",
	"sap/ui/core/Fragment",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/Popover",
	"sap/m/Button",
	"sap/m/library"
], function (jQuery, Device, Fragment, Controller, JSONModel, Popover, Button, mobileLibrary) {
	"use strict";
	var oRouter;
	var ButtonType = mobileLibrary.ButtonType,
		PlacementType = mobileLibrary.PlacementType;
	return Controller.extend("utg.ui5-training.controller.Layout", {

		onInit: function () {
			this._setToggleButtonTooltip(!Device.system.desktop);
			oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		onItemSelect: function (oEvent) {
			var item = oEvent.getParameter("item");
			this.byId("pageContainer").to(this.getView().createId(item.getKey()));
		},
		handleUserNamePress: function (event) {
			var oPopover = new Popover({
				showHeader: false,
				placement: PlacementType.Bottom,
				content: [
					new Button({
						text: "Logout",
						type: ButtonType.Transparent,
						press: function (oEvent) {
							oRouter.navTo("Login");
						}
					})
				]
			}).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");

			oPopover.openBy(event.getSource());
		},

		onSideNavButtonPress: function () {
			var toolPage = this.byId("toolPage");
			var sideExpanded = toolPage.getSideExpanded();
			this._setToggleButtonTooltip(sideExpanded);
			toolPage.setSideExpanded(!toolPage.getSideExpanded());
		},

		_setToggleButtonTooltip: function (bLarge) {
			var toggleButton = this.byId("sideNavigationToggleButton");
			if (bLarge) {
				toggleButton.setTooltip("Large Size Navigation");
			} else {
				toggleButton.setTooltip("Small Size Navigation");
			}
		},
		onHomeButtonPress: function () {
			// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Home");
		},
		handleLogoutPress: function () {
			// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("Login");
		},
		onClickViewEmpNavBtn: function () {
			oRouter.navTo("Employees");
		}
	});

});