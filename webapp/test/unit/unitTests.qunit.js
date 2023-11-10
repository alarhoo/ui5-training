/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"utg/ui5-training/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});