//The action to call the parse service should be here.



app.factory('ParseData', ['$http', function($http) {
	var ParseFactory = {};
    
    ParseFactory.getItems = function() {
        return $http.get('https://api.parse.com/1/classes/BlogPosts/', { 
           headers: { 
               'X-Parse-Application-Id':'8k7LXICOqCkunJ8L4dVgfnRo4UtTNvhX10FeOwDy',
               'X-Parse-REST-API-Key':'GRSF9DEbUmJOruArM9kFcec89tSttiXadJLZiPXm'}
           })
        .then(function(response) {
            return response.data;
        });
    }
    
    ParseFactory.postItems = function(data) {
        $http.post('https://api.parse.com/1/classes/BlogPosts/', { 
           headers: { 
               'X-Parse-Application-Id':'8k7LXICOqCkunJ8L4dVgfnRo4UtTNvhX10FeOwDy',
               'X-Parse-REST-API-Key':'GRSF9DEbUmJOruArM9kFcec89tSttiXadJLZiPXm'}
           }, data).catch(function(err){
            console.log(err);
        })
    }
    return ParseFactory;
}]);


