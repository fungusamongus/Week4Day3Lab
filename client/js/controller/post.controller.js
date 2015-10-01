app.controller('post.controller.js', ['$scope','$location', 'ParseData', function ($scope, $location, ParseData) {
	$scope.greeting = 'Yo!';
	
	
	$scope.post = function (view){
		
		var post = {
		author: $scope.author,
		title: $scope.title,
		content: $scope.content
		}
		var jPost = JSON.stringify(post);
		ParseData.save(jPost)
		$location.path(view);
		
	
	}
}]);