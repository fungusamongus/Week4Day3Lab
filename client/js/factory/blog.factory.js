//The action to call the parse service should be here.



app.factory('ParseData', ['$http','$resource', function($http, $resource) {
	/*var ParseFactory = {};
    
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
       return $http.post('https://api.parse.com/1/classes/BlogPosts/',data, { 
           headers: { 
               'X-Parse-Application-Id':'8k7LXICOqCkunJ8L4dVgfnRo4UtTNvhX10FeOwDy',
               'X-Parse-REST-API-Key':'GRSF9DEbUmJOruArM9kFcec89tSttiXadJLZiPXm',
               "Content-Type": "application/json"}
           }).catch(function(err){
            console.log(err);
        })
    }
    return ParseFactory;*/
    
    var ParseFactory = $resource('https://api.parse.com/1/classes/BlogPosts',{},
     {
        'query': {
            headers: {
               'X-Parse-Application-Id':'8k7LXICOqCkunJ8L4dVgfnRo4UtTNvhX10FeOwDy',
               'X-Parse-REST-API-Key':'GRSF9DEbUmJOruArM9kFcec89tSttiXadJLZiPXm',
            },
            
        },
        'save': {
            method: 'POST',
            headers: {
               'X-Parse-Application-Id':'8k7LXICOqCkunJ8L4dVgfnRo4UtTNvhX10FeOwDy',
               'X-Parse-REST-API-Key':'GRSF9DEbUmJOruArM9kFcec89tSttiXadJLZiPXm',
               "Content-Type": "application/json"
            }
        }
        
    })
    return ParseFactory
}]);


