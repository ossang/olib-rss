<head>
	<#include "rssui_head.ftl">
</head>
 <body ng-app="rss-app" class="nav-md">
  	<div class="container body">
  		<div class="main_container">
  			<div ng-controller="rss-controller">
			 	<#include "rssui_sidebar.ftl">
				<#include "rssui_navi_top.ftl">	
		        <#include "rssui_sidebar_footer.ftl">
	            <#include "rssui_modal_add.ftl">
	            <#include "rssui_modal_remove.ftl">
	            <#include "rssui_body.ftl">
			</div>
		</div>
	</div>
	
	<#include "rssui_footer.ftl">
  </body>
