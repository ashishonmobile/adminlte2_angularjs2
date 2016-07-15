System.register(["angular2/platform/browser", "angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1;
    var HelloWorld, UserPanel, SearchForm, SidebarMenu, ContentHeader, Content, MainFooter, ControlSidebarHome, ControlSidebarStats, ControlSidebarSettings;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HelloWorld = (function () {
                function HelloWorld() {
                }
                HelloWorld = __decorate([
                    core_1.Component({
                        selector: 'hello-world',
                        template: "\n <div>\n Hello world Ashish\n </div>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloWorld);
                return HelloWorld;
            }());
            //--- User Panel for side bar ---//
            UserPanel = (function () {
                function UserPanel() {
                }
                UserPanel = __decorate([
                    core_1.Component({
                        selector: 'user-panel',
                        template: "\n  <div class=\"user-panel\">\n        <div class=\"pull-left image\">\n          <img src=\"dist/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n        </div>\n        <div class=\"pull-left info\">\n          <p>Alexander Pierce</p>\n          <!-- Status -->\n          <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n        </div>\n      </div>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserPanel);
                return UserPanel;
            }());
            //--- Search Form for side bar ---//
            SearchForm = (function () {
                function SearchForm() {
                }
                SearchForm = __decorate([
                    core_1.Component({
                        selector: 'search-form',
                        template: "\n   <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n        <div class=\"input-group\">\n          <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n              <span class=\"input-group-btn\">\n                <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n                </button>\n              </span>\n        </div>\n      </form>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SearchForm);
                return SearchForm;
            }());
            //--- Sidebar Menu for side bar ---//
            SidebarMenu = (function () {
                function SidebarMenu() {
                }
                SidebarMenu = __decorate([
                    core_1.Component({
                        selector: 'sidebar-menu',
                        template: "\n    <ul class=\"sidebar-menu\">\n        <li class=\"header\">HEADER</li>\n        <!-- Optionally, you can add icons to the links -->\n        <li class=\"active\"><a href=\"#\"><i class=\"fa fa-link\"></i> <span>Link</span></a></li>\n        <li><a href=\"#\"><i class=\"fa fa-link\"></i> <span>Another Link</span></a></li>\n        <li class=\"treeview\">\n          <a href=\"#\"><i class=\"fa fa-link\"></i> <span>Multilevel</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a href=\"#\">Link in level 2</a></li>\n            <li><a href=\"#\">Link in level 2</a></li>\n          </ul>\n        </li>\n      </ul>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SidebarMenu);
                return SidebarMenu;
            }());
            //--- Content Header ---//
            ContentHeader = (function () {
                function ContentHeader() {
                }
                ContentHeader = __decorate([
                    core_1.Component({
                        selector: 'content-header',
                        template: "\n    <section class=\"content-header\">\n        <h1>\n          Page Header\n          <small>Optional description</small>\n        </h1>\n        <ol class=\"breadcrumb\">\n          <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Level</a></li>\n          <li class=\"active\">Here</li>\n        </ol>\n      </section>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContentHeader);
                return ContentHeader;
            }());
            //--- Content  ---//
            Content = (function () {
                function Content() {
                }
                Content = __decorate([
                    core_1.Component({
                        selector: 'content',
                        directives: [HelloWorld],
                        template: "\n   <section class=\"content\">\n\n        <!-- Your Page Content Here -->\n        <hello-world></hello-world>\n      </section>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Content);
                return Content;
            }());
            //--- Main Footer  ---//
            MainFooter = (function () {
                function MainFooter() {
                }
                MainFooter = __decorate([
                    core_1.Component({
                        selector: 'main-footer',
                        directives: [HelloWorld],
                        template: "\n    <footer class=\"main-footer\">\n      <!-- To the right -->\n      <div class=\"pull-right hidden-xs\">\n        Anything you want\n      </div>\n      <!-- Default to the left -->\n      <strong>Copyright &copy; 2016 <a href=\"#\">Company</a>.</strong> All rights reserved.\n    </footer>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MainFooter);
                return MainFooter;
            }());
            //--- Control Sidebar Home  ---//
            ControlSidebarHome = (function () {
                function ControlSidebarHome() {
                }
                ControlSidebarHome = __decorate([
                    core_1.Component({
                        selector: 'control-sidebar-home',
                        template: "\n     <div class=\"tab-pane active\" id=\"control-sidebar-home-tab\">\n          <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n          <ul class=\"control-sidebar-menu\">\n            <li>\n              <a href=\"javascript::;\">\n                <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\n                <div class=\"menu-info\">\n                  <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\n                  <p>Will be 23 on April 24th</p>\n                </div>\n              </a>\n            </li>\n          </ul>\n          <!-- /.control-sidebar-menu -->\n\n          <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n          <ul class=\"control-sidebar-menu\">\n            <li>\n              <a href=\"javascript::;\">\n                <h4 class=\"control-sidebar-subheading\">\n                  Custom Template Design\n                  <span class=\"pull-right-container\">\n                  <span class=\"label label-danger pull-right\">70%</span>\n                  </span>\n                </h4>\n\n                <div class=\"progress progress-xxs\">\n                  <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n                </div>\n              </a>\n            </li>\n          </ul>\n          <!-- /.control-sidebar-menu -->\n\n        </div>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ControlSidebarHome);
                return ControlSidebarHome;
            }());
            ControlSidebarStats = (function () {
                function ControlSidebarStats() {
                }
                ControlSidebarStats = __decorate([
                    core_1.Component({
                        selector: 'control-sidebar-stats',
                        template: "\n      <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ControlSidebarStats);
                return ControlSidebarStats;
            }());
            ControlSidebarSettings = (function () {
                function ControlSidebarSettings() {
                }
                ControlSidebarSettings = __decorate([
                    core_1.Component({
                        selector: 'control-sidebar-settings',
                        template: "\n       <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n          <form method=\"post\">\n            <h3 class=\"control-sidebar-heading\">General Settings</h3>\n\n            <div class=\"form-group\">\n              <label class=\"control-sidebar-subheading\">\n              Report panel usage\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n              <p>\n                Some information about this general settings option\n              </p>\n            </div>\n            <!-- /.form-group -->\n          </form>\n        </div>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ControlSidebarSettings);
                return ControlSidebarSettings;
            }());
            //need to bootstrapp all component which we want to display
            //bootstrap(HelloWorld);
            browser_1.bootstrap(UserPanel);
            browser_1.bootstrap(SearchForm);
            browser_1.bootstrap(SidebarMenu);
            browser_1.bootstrap(ContentHeader);
            browser_1.bootstrap(Content);
            browser_1.bootstrap(MainFooter);
            browser_1.bootstrap(ControlSidebarHome);
            //bootstrap(ControlSidebarStats);
            browser_1.bootstrap(ControlSidebarSettings);
        }
    }
});
//# sourceMappingURL=app.js.map