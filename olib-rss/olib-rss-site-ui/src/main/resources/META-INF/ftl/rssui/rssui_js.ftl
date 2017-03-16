<script>
	var rssapp = angular.module('rss-app',[]);
	rssapp.controller('rss-controller',['$scope','$http','$sce','$timeout', function($scope, $http,$sce,$timeout) {
	$scope.viewtype = "full";
	$scope.rightMain = {'min-height':512};
	$scope.selectBookmarkId='';
	
	$scope.changeViewtype = function(type){
		$scope.viewtype = type;
		angular.element("#top_navi_menu li").removeClass("select_top_menu");
		angular.element("#top_navi_menu_"+type).addClass("select_top_menu");
		$timeout($scope.resizeHeight,100);
	};
	
	$scope.getMenuList = function(){
		$http({
			url: '/rss/bookmark',
			method: "GET"
		}).then(function(response) {
			$scope.bookmarkList = response.data;
		});
	};
	
	$scope.removeFeedItem = function(id){
		angular.element("#feedItem_"+id).remove();
	};
	
	$scope.selectMenu = function(index){
		var selected = document.getElementById('subMenu_'+index),
			display = selected.style.display;

		if(display == 'block'){
			selected.style.display = 'none';
		}else{
			selected.style.display = 'block';
		}
	};
	
	$scope.selectBookmark = function(){
		angular.element("#bookmark li").removeClass("select_rss");
		angular.element("#bookmark_"+$scope.selectBookmarkId).addClass("select_rss");
	};
	
	$scope.resizeHeight = function(){
		var height = angular.element("#right_main_body").height();
		$scope.rightMain = {'min-height': height+50}; 
	};
	
	$scope.updateRss = function(data){
		$scope.selectBookmark();
		$scope.feedList = data;
		$timeout($scope.resizeHeight,100);
	};
	
	$scope.getRss = function(id){
		$scope.selectBookmarkId = id;
		
		$http({
			url:'/rss/'+id,
			method:'GET'
		}).then(function(response){
			$scope.updateRss(response.data);
		});
	};
	
	$scope.addRssRequest = function(param){
		$http({
			url:'/rss/bookmark',
			method:'POST',
			data:{
				'jsonData':JSON.stringify(param)
			},
			headers: {'Content-Type': 'application/json; charset=utf-8'}
		}).then(function(response){
			$scope.getMenuList();
			$scope.updateRss(response.data);
		});
	};
	
	$scope.addRss = function(name,url){
		var msg = name+" - "+url+" add?";
		var param={};
		param['name'] = name;
		param['url'] = url;
		
		$scope.addRssRequest(param);
	};
	
	$scope.deleteRssRequest = function(id){
		$http({
			url:'/rss/bookmark/'+id,
			method:'DELETE'
		}).then(function(response){
			$scope.getMenuList();
		});
	};
	
	$scope.deleteRssUi = function(id){
		angular.element("#"+id).remove();
		angular.element("#remove_modal_"+id).remove();
	};
	
	$scope.deleteRss = function(id){
		var msg = "delete bookmark?";
		if(confirm(msg)){
			$scope.deleteRssUi(id);
			$scope.deleteRssRequest(id);
		}
	};
	
	$scope.init = function(){
		$scope.getMenuList();
		
	};
	$scope.init();
}]);

//------------------------------------------------------------------------------
//html 태그 인식 필터
//------------------------------------------------------------------------------
rssapp.filter('html',function($sce){
 return function(input){
     return $sce.trustAsHtml(input);
 }
});

</script>