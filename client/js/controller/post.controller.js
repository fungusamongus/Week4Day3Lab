app.controller('post.controller.js', ['$scope','$location', 'ParseData', function ($scope, $location, ParseData) {
	$scope.greeting = 'Yo!';
	$scope.post = function (view){
		$location.path(view);
	}
}]);