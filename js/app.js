  angular.module('GiphyApp', [])

.controller('GiphyCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.search = '';
  $scope.searchGiphy = searchGiphy

function searchGiphy() {
  console.log('success!')
  $http.get('http://api.giphy.com/v1/gifs/search?q=' +
  $scope.search + '&api_key=dc6zaTOxFJmzC')
  .then(function success(res) {
    $scope.giphy = res.data.data;
    $scope.search = '';
    // console.log(res);
  }, function error(res) {
    console.log(res);
  });
}
$scope.watch = ('search', function(){
  searchGiphy();
})
}]);
