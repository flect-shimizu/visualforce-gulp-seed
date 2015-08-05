var app = angular.module("app", []);

app.controller("ctrl", function ($scope) {

  var callback = function(result, event){
    if (event.status) {
      $scope.result = result;
    } else if (event.type === 'exception') {
      $scope.result = event.message + " " + event.where + "";
    } else {
      $scope.result = event.message;
    }
  }

  // Javascript Remotingの呼び出し
  Visualforce.remoting.Manager.invokeAction(
    '{!$RemoteAction.RemoteActionTestController.helloWorld}',
    'World',
    callback,
    {escape: true});
})

