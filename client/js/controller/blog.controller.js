
app.controller('blog.controller.js', ['$scope','$location','ParseData', function ($scope, $location, ParseData) {
	$scope.greeting = 'Hey there!';
	$scope.newPost = function (view) { 
		$location.path(view)
	}
	ParseData.getItems().then(function(data) {
    $scope.items = data.results;
		}).catch(function(err) {
			alert('err');
		});
	}]);