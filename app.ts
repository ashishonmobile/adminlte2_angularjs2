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

//--- Sidebar Menu for side bar ---//
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

//--- Content Header ---//
@Component({
    selector: 'content-header',
    template: `
    <section class="content-header">
        <h1>
          Page Header
          <small>Optional description</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
          <li class="active">Here</li>
        </ol>
      </section>
 `
})
class ContentHeader {
}

//--- Content  ---//
@Component({
    selector: 'content',
    directives: [HelloWorld],
    template: `
   <section class="content">

        <!-- Your Page Content Here -->
        <hello-world></hello-world>
      </section>
 `
})
class Content {
}

//--- Main Footer  ---//
@Component({
    selector: 'main-footer',
    directives: [HelloWorld],
    template: `
    <footer class="main-footer">
      <!-- To the right -->
      <div class="pull-right hidden-xs">
        Anything you want
      </div>
      <!-- Default to the left -->
      <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
    </footer>
 `
})
class MainFooter {
}


//--- Control Sidebar Home  ---//
@Component({
    selector: 'control-sidebar-home',
    template: `
     <div class="tab-pane active" id="control-sidebar-home-tab">
          <h3 class="control-sidebar-heading">Recent Activity</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript::;">
                <i class="menu-icon fa fa-birthday-cake bg-red"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>

                  <p>Will be 23 on April 24th</p>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

          <h3 class="control-sidebar-heading">Tasks Progress</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript::;">
                <h4 class="control-sidebar-subheading">
                  Custom Template Design
                  <span class="pull-right-container">
                  <span class="label label-danger pull-right">70%</span>
                  </span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

        </div>
 `
})
class ControlSidebarHome {
}


@Component({
    selector: 'control-sidebar-stats',
    template: `
      <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
 `
})
class ControlSidebarStats {
}

@Component({
    selector: 'control-sidebar-settings',
    template: `
       <div class="tab-pane" id="control-sidebar-settings-tab">
          <form method="post">
            <h3 class="control-sidebar-heading">General Settings</h3>

            <div class="form-group">
              <label class="control-sidebar-subheading">
              Report panel usage
              <input type="checkbox" class="pull-right" checked>
            </label>

              <p>
                Some information about this general settings option
              </p>
            </div>
            <!-- /.form-group -->
          </form>
        </div>
 `
})
class ControlSidebarSettings {
}

//need to bootstrapp all component which we want to display
//bootstrap(HelloWorld);
bootstrap(UserPanel);
bootstrap(SearchForm);
bootstrap(SidebarMenu);
bootstrap(ContentHeader);
bootstrap(Content);
bootstrap(MainFooter);
bootstrap(ControlSidebarHome);
//bootstrap(ControlSidebarStats);
bootstrap(ControlSidebarSettings);
