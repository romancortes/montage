/**
 * @module ui/field.reel
 */
var Control = require("montage/ui/control").Control;
    // bindPropertyToClassName = require("core/core").bindPropertyToClassName;

/**
 * @class ControlField
 * @extends Control
 */
var ControlField = exports.ControlField = Control.specialize(/** @lends ControlField# */ {

    helpShown: {
        value: false
    },

    handleFieldInfoButtonAction: {
        value: function () {
            this.helpShown = !this.helpShown;
        }
    },

    handleCloseHelpButtonAction: {
        value: function () {
            this.helpShown = !this.helpShown;
        }
    }
});

// bindPropertyToClassName(ControlField, "hasError", "has-error");
// bindPropertyToClassName(ControlField, "isValidated", "is-validated");
// bindPropertyToClassName(ControlField, "disabled", "is-disabled");
