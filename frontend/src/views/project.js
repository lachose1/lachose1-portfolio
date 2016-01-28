var _ = require("underscore"),
    Marionette = require("backbone.marionette"),
    //GameModel = require("../models/game"),
    OOS = require("../outofsight.js"),
    OOSUrl = require("../config/oosUrl"),
    ConfirmModalView = require("./confirmModal"),
    template = require("../../dist/templates").project;

var ProjectView = Marionette.ItemView.extend({
    template: template,
    //tagName: "a",
    //className: "list-group-item btn-category",

    ui: {
        // buttonCategory: ".btn-category",
        // buttonDelCategory: ".btn-delete",
        // buttonOpenProducts: ".btn-open-products"
    },

    events: {
        // "click @ui.buttonCategory": "handleCategoryClick",
        // "click @ui.buttonDelCategory": "handleDelCategoryClick",
        // "click @ui.buttonOpenProducts": "handleOpenProductsClick"
    },

    initialize: function(options) {
    },

    onRender: function() {
        // this.$el.attr("href", "#");
    },

    onDestroy: function(options) {
        // window.clearInterval(this.intervalId);
    },

    handleCategoryClick: function() {
        // POSMenu.vent.trigger("category:Clicked", this.model);
    },

    handleDelCategoryClick: function() {
        // var options = {
        //     message: "Do you really want to delete this category?",
        //     confirmLabel: "Delete",
        //     confirmCallback: _.bind(this.deleteModel, this)
        // };

        // POSMenu.modalContainer.show(new ConfirmModalView(options));
    },

    handleOpenProductsClick: function() {
        // POSMenu.vent.trigger("category:ProductClicked", this.model);
    },

    deleteModel: function() {
        // this.model.destroy();
        // POSMenu.vent.trigger("category:MaxCleared");
    }
});

module.exports = ProjectView;