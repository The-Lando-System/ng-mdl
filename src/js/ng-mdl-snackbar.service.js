(function() { 'use strict';

// Snackbar Service
angular.module('ng-mdl')
.factory('MdlSnackbar', MdlSnackbar);

MdlSnackbar.$inject = ['$rootScope'];

function MdlSnackbar($rootScope) {

  // Init variables
  var mdlSnackbarService = {};
  var snackbarSelector = '#notification-snackbar';

  // Function declarations
  mdlSnackbarService.notify = notify;
  mdlSnackbarService.info = info;
  mdlSnackbarService.success = success;
  mdlSnackbarService.warn = warn;
  mdlSnackbarService.error = error;


  // Function implementations
  function notify(message,timeToLive){
    setClassesToFalse();
    showSnackbar(message,timeToLive);
  };

  function info(message,timeToLive){
    setClassesToFalse();
    $rootScope.mdlSnackbarInfo = true;
    showSnackbar(message,timeToLive);
  };

  function success(message,timeToLive){
    setClassesToFalse();
    $rootScope.mdlSnackbarSuccess = true;
    showSnackbar(message,timeToLive);
  };

  function warn(message,timeToLive){
    setClassesToFalse();
    $rootScope.mdlSnackbarWarn = true;
    showSnackbar(message,timeToLive);
  };

  function error(message,timeToLive){
    setClassesToFalse();
    $rootScope.mdlSnackbarError = true;
    showSnackbar(message,timeToLive);
  };
  
  function showSnackbar(message,timeToLive){
    var snackbarContainer = document.querySelector(snackbarSelector);
    var data = {
      message: message,
      timeout: timeToLive
    };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  }

  function setClassesToFalse(){
    $rootScope.mdlSnackbarInfo = false;
    $rootScope.mdlSnackbarSuccess = false;
    $rootScope.mdlSnackbarWarn = false;
    $rootScope.mdlSnackbarError = false;
  }


  // Return the service
  return mdlSnackbarService;

};

})();