(function() { 'use strict';

// Module Definition
angular.module('test-app', ['ng-mdl']);
  
})();


(function() { 'use strict';

// Snackbar Service
angular.module('test-app')
.controller('TestController', TestController);

TestController.$inject = ['$scope','MdlConfirm','MdlSnackbar'];

function TestController($scope,MdlConfirm,MdlSnackbar) {

  $scope.showNotify =  function(){
  	MdlSnackbar.notify("I'm a notify message!",2000);
  }

  $scope.showSuccess =  function(){
  	MdlSnackbar.success("I'm a success message!",2000);
  }

  $scope.showInfo =  function(){
  	MdlSnackbar.info("I'm an info message!",2000);
  }

  $scope.showWarn =  function(){
  	MdlSnackbar.warn("I'm a warn message!",2000);
  }

  $scope.showError =  function(){
  	MdlSnackbar.error("I'm an error message!",2000);
  }

  $scope.openConfirm = function(){
    MdlConfirm.open('Confirm Title','Confirm Text',replyFunction);
  }

  function replyFunction(answer){
    $scope.confirmAnswer = answer;
  }

};

})();