app.controller("TopController", function($scope) {
    $scope.result = "Hoge";

    $scope.action = function (){
      // Javascript Remotingの呼び出し
      Visualforce.remoting.Manager.invokeAction(
        'RemoteActionTestController.helloWorld',
        'World',
        (result, event) => {
          if (event.status) {
            $scope.result = result;
          } else if (event.type === 'exception') {
            $scope.result = event.message + " " + event.where + "";
          } else {
            $scope.result = event.message;
          }
          $scope.$apply();
        },
        {escape: true});
    }

    var data =[
      ['data1', 30, 200, 100, 400, 150, 250],
      ['data2', 50, 20, 10, 40, 15, 25]
    ];
    var chart = new MainChart("#chart");
    chart.show(data);
  })
