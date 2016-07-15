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
    var HelloWorld, UserPanel;
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
                        template: "\n <div>\n Hello world Ashish\n\n </div>\n "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HelloWorld);
                return HelloWorld;
            }());
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
            browser_1.bootstrap(HelloWorld);
        }
    }
});
// bootstrap(UserPanel); 
//# sourceMappingURL=app.js.map