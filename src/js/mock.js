
var Visualforce = {
  remoting: {
    Manager: {
      invokeAction: function (action, param, callback, option) {
        MockActions[action].exec(callback);
      }
    }
  }
};

class MockAction {
  constructor(response) {
    this.res = response;
    this.event = {
      status: "200",
      type: "",
      message: "",
      where: ""
    };
  }
  exec(callback){
    callback(this.res, this.event)
  }
}

var MockActions = {
  'RemoteActionTestController.helloWorld' : new MockAction('OK')
}

