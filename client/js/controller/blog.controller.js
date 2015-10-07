
app.controller('blog.controller.js', ['$scope','$location','ParseData', function ($scope, $location, ParseData) {
	$scope.posts = [];
	$scope.greeting = 'Hey there!';
	$scope.newPost = function (view) { 
		$location.path(view)
	}
	
	ParseData.query().$promise.then(function (data){
		$scope.posts = data.results;
		 console.log(data.results[1].objectId)
	 })
	/* $scope.viewPost = function (view) {
		 $location.path(view);
	 }*/
	 
	
	
	}]);