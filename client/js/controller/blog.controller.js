
app.controller('blog.controller.js', ['$scope','$location', function ($scope, $location) {
	$scope.greeting = 'Hey there!';
	$scope.newPost = function (view) { 
		$location.path(view)
	}
}]);