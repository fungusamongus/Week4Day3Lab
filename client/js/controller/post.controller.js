app.controller('post.controller.js', ['$scope','$location', 'ParseData', function ($scope, $location, ParseData) {
	$scope.greeting = 'Yo!';
	var post = {
		author: $scope.author,
		title: $scope.title,
		content: $scope.content
	}
	$scope.post = function (view){
		ParseData.postItems(post)
		$location.path(view);
	}
}]);