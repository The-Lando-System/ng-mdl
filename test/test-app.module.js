(function() { 'use strict';

// Module Definition
angular.module('test-app', ['ng-mdl']);
  
})();


(function() { 'use strict';

// Snackbar Service
angular.module('test-app')
.controller('TestController', TestController);

TestController.$inject = ['$scope','MdlSnackbar','MdlUtils','MdlDialog'];

function TestController($scope,MdlSnackbar,MdlUtils,MdlDialog) {

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
    MdlDialog.confirm('Confirm Title','Confirm Text',replyFunction);
  }

  $scope.openAlert = function(){
    MdlDialog.alert('Alert Title','Alert Text');
  }

  function replyFunction(answer){
    $scope.confirmAnswer = answer;
  }

  $scope.closeDrawer = function() {
    MdlUtils.closeDrawer();
  }

  $scope.openDialog = function(dialogNumber) {
    MdlDialog.open('test-dialog-' + dialogNumber);
  }

  $scope.closeDialog = function(dialogNumber) {
    MdlDialog.close('test-dialog-' + dialogNumber);
  }

  $scope.dialogAction = function(dialogResult) {
    $scope.dialogResult = dialogResult;
  }

};

})();