<div class="col-md-3 left_col">
  <div class="left_col scroll-view">
    <div class="navbar nav_title" style="border: 0;">
      <a href="/rss/main" class="site_title"><i class="fa fa-rss"></i> <span>Olib-RSS</span></a>
    </div>
    
    <div class="clearfix"></div>
    <br>

	<div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
	  <div class="menu_section">
	    <ul class="nav side-menu" style="">
	      <li class="active">
	      	<a>
	      		<i class="fa fa-book"></i> Bookmark <span class="fa fa-chevron-down"></span>
	      	</a>
	        <ul id="bookmark" class="nav child_menu" style="display:block;">
	          <li id="bookmark_{{bookmark.id}}" ng-repeat="bookmark in bookmarkList" >
	          	<a ng-click="getRss(bookmark.id)">{{bookmark.name}} </a>
	          </li>
	        </ul>
	      </li>
	    </ul>
	  </div>
	</div>
  </div>
</div>
