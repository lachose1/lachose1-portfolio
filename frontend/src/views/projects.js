var _ = require("underscore"),
    Marionette = require("backbone.marionette"),
    OOS = require("../outofsight"),
    HomeContentView = require("./homeContentView"),
    ProjectsList = require("./projectsList"),
    template = require("../../dist/templates").projects;

var ProjectsView = Marionette.LayoutView.extend({
    template: template,
// 
    regions: {
        // mainContainer: "#main-container"
        sidebar: "#left-sidebar",
        rightContainer: "#right-content"
    },

    ui: {
        //btnCategory: ".btn-category"
    },

    events: {
        //"click @ui.btnCategory": "handleCategoryClick"
    },

    initialize: function(options) {
        this.contentType = options.contentType;

        // this.mainView = new HomeContentView();
        switch(this.contentType){
            case "home":
                this.rightContent = new ProjectsList();
                break;
            case "about":
                break;
            default:
                this.rightContent = new ProjectsList();
        }
    },

    onRender: function() {
        // this.sidebar.show(this.mainView);
        this.rightContainer.show(this.rightContent);
        // this.famocoPreview.show(new FamocoPreviewView({collection: this.collection, pageType: this.pageType}));
    }
});

module.exports = ProjectsView;
