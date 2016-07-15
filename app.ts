/// <reference path="node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="node_modules/angular2/typings/browser.d.ts"/>
 import { bootstrap } from "angular2/platform/browser";
 import { Component } from "angular2/core";

 @Component({
 selector: 'hello-world',
 template: `
 <div>
 Hello world Ashish

 </div>
 `
 })
 class HelloWorld {
 }




 @Component({
 selector: 'user-panel',
 template: `
  <div class="user-panel">
        <div class="pull-left image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Alexander Pierce</p>
          <!-- Status -->
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
 `
 })
 class UserPanel {
 }
 

 bootstrap(HelloWorld);
// bootstrap(UserPanel);