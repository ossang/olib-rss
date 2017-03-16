<div ng-if="viewtype=='full'" ng-repeat="feed in feedList" class="">
	<div id="feedItem_{{$index}}" class="x_panel feed_item">
	  <div class="x_title">
		<left>{{feed.pubDate}}</left>
	    <ul ng-click="removeFeedItem($index)" class="nav navbar-right panel_toolbox" style="min-width:0;">
          <li><a class="close-link"><i class="fa fa-close"></i></a></li>
        </ul>
	    <h2>{{feed.title | html}}</h2>
	    <div class="clearfix"></div>
	  </div>
	  <div class="x_content">
		<a href="{{feed.link}}" target="_blank">
		  <div ng-bind-html="feed.description | html"></div>
		</a>
	  </div>
	</div>
</div>