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



//--- User Panel for side bar ---//
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



//--- Search Form for side bar ---//
 @Component({
 selector: 'search-form',
 template: `
   <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
 `
 })
 class SearchForm {
 }

 //--- Search Form for side bar ---//
 @Component({
 selector: 'sidebar-menu',
 template: `
    <ul class="sidebar-menu">
        <li class="header">HEADER</li>
        <!-- Optionally, you can add icons to the links -->
        <li class="active"><a href="#"><i class="fa fa-link"></i> <span>Link</span></a></li>
        <li><a href="#"><i class="fa fa-link"></i> <span>Another Link</span></a></li>
        <li class="treeview">
          <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="#">Link in level 2</a></li>
            <li><a href="#">Link in level 2</a></li>
          </ul>
        </li>
      </ul>
 `
 })
 class SidebarMenu {
 }

 
//need to bootstrapp all component which we want to display
 bootstrap(HelloWorld);
 bootstrap(UserPanel);
 bootstrap(SearchForm);
 bootstrap(SidebarMenu);