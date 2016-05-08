angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  //initialize the global variables for this view
  $scope.number = 0;
  $scope.post = {};
  $scope.match_options = [["Buy", "Sell"], ["Rent", "Lease"], ["Find", "Give"], ["Work", "Hire"], ["Do", "Task"], ["Join", "Recruit"], ["Meet", "Meet"]];


  getData();

  function getData() {
    var ref = new Firebase('https://gub.firebaseio.com/');
    ref.on("value", function(snapshot) {
      $scope.number = snapshot.val();
    }, function (errorObject) {});
  }


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
