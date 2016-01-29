var _ = require("underscore"),
    Marionette = require("backbone.marionette"),
    OOS = require("../outofsight"),
    ProjectView = require("./project"),
    ProjectsList = require("./projectsList"),
    template = require("../../dist/templates").projects;

var ProjectsView = Marionette.CompositeView.extend({
    template: template,
    childView: ProjectView,
    childViewContainer: "#right-content",
    id: "right-content",
    className: "list-group",
// 
    regions: {
        // mainContainer: "#main-container"
        //sidebar: "#left-sidebar",
        // rightContainer: "#right-content"
    },

    ui: {
        //btnCategory: ".btn-category"
    },

    events: {
        //"click @ui.btnCategory": "handleCategoryClick"
    },

    initialize: function(options) {
        this.listenTo(OOS.vent, "project:Clicked",
                      this.handleProjectClicked);
        // this.contentType = options.contentType;

        // this.mainView = new HomeContentView();
        // switch(this.contentType){
        //     case "home":
        //         this.rightContent = new ProjectsList();
        //         break;
        //     case "about":
        //         break;
        //     default:
        //         this.rightContent = new ProjectsList();
        // }
    },

    onRender: function() {
        // this.sidebar.show(this.mainView);
        // this.rightContainer.show(this.rightContent);
        // this.famocoPreview.show(new FamocoPreviewView({collection: this.collection, pageType: this.pageType}));
    },

    handleProjectClicked: function(model) {
        // console.log(model);
        var html = "<div class='fade-in-2s'>";
        html += "<h2>" + model.get("project_name") + "</h2>";
        html += "<h5>" + model.get("technologies") + " - " + model.get("text_date") + "</h5>";
        html += "<div class='free-wall'>";
        html += "<div class='brick'><p>" + model.get("description") + "</p></div>";
        html += "<div class='brick size320'><img class='size320' src='http://localhost:4000/assets/img/projects/ozone/ozone3.jpg' alt='image'/></div>";
        html += "<div class='brick size320'><img class='size320' src='http://localhost:4000/assets/img/projects/ozone/ozone3.jpg' alt='image'/></div>";
        html += "<div class='brick size320'><img class='size320' src='http://localhost:4000/assets/img/projects/ozone/ozone3.jpg' alt='image'/></div>";
        html += "<div class='brick size320'><img class='size320' src='http://localhost:4000/assets/img/projects/ozone/ozone3.jpg' alt='image'/></div>";
        html += "<div class='brick size320'><img class='size320' src='http://localhost:4000/assets/img/projects/ozone/ozone3.jpg' alt='image'/></div>";
        html += "<div class='brick size320'><img class='size320' src='http://localhost:4000/assets/img/projects/ozone/ozone3.jpg' alt='image'/></div>";
        html += "</div>";
        html += "</div>";
        $("#left-sidebar").html(html);
        $(".free-wall").each(function() {
            var wall = new freewall(this);
            wall.reset({
                animate: true,
                flex: true,
                gutterX: 10,
                gutterY: 10,
                cellW: 320,
                cellH: 200,
                // gutter: mixed,
                onResize: function() {
                    wall.fitWidth();
                }
            })
            wall.fitWidth();
        });
        $(window).trigger("resize");
    }
});

module.exports = ProjectsView;