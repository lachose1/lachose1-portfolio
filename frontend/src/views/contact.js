var _ = require("underscore"),
    Marionette = require("backbone.marionette"),
    OOS = require("../outofsight"),
    //CategoriesView = require("./categories"),
    //ProductsView = require("./products"),
    template = require("../../dist/templates").contact;

var ContactView = Marionette.LayoutView.extend({
    template: template,

    regions: {
        // categoriesPreview: "#cat-preview-table",
        // productsPreview: "#products-preview"
    },

    ui: {
        sendButton: "#send-button"
        //btnCategory: ".btn-category"
    },

    events: {
        "click @ui.sendButton": "handleSendClick"
        //"click @ui.btnCategory": "handleCategoryClick"
    },

    initialize: function(options) {
        // this.collection = options.collection;
        // this.pageType = options.pageType;
    },

    onRender: function() {

    },

    onShow: function() {
        //console.log(this.collection);
    },

    handleSendClick: function(event) {
        event.preventDefault();
        alert("Execute Send Script");
    }
});

module.exports = ContactView;
