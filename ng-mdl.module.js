(function() { 'use strict';

// Module Definition
angular.module('ng-mdl', []);

})();

(function() { 'use strict';

// Run when module loads
angular.module('ng-mdl')
.run(RunNgMdl);

function RunNgMdl($rootScope,$compile){

  // Append the dialog to the body
  var confirmTemplate = '<dialog id="mdl-confirm-dialog" class="mdl-dialog">' +
                  '<h3 class="mdl-dialog__title">{{mdlConfirmTitle}}</h3>' +
                  '<div class="mdl-dialog__content">' +
                    '<p>{{mdlConfirmText}}</p>' +
                  '</div>' +
                  '<div class="mdl-dialog__actions">' +
                    '<button ng-click="closeMdlDialog(true);" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Yes</button>' +
                    '<button ng-click="closeMdlDialog(false);" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">No</button>' +
                  '</div>' +
                 '</dialog>'
  $('body').append($compile(confirmTemplate)($rootScope));

  // Append the snackbar to the body
  var snackbarTemplate = '<div id="notification-snackbar" class="mdl-js-snackbar mdl-snackbar" ' +
                    'ng-class="{ \'mdl-snackbar-info\' : mdlSnackbarInfo, ' +
                                '\'mdl-snackbar-success\' : mdlSnackbarSuccess, ' +
                                '\'mdl-snackbar-warn\' : mdlSnackbarWarn, ' + 
                                '\'mdl-snackbar-error\' : mdlSnackbarError }">' + 
                    '<div class="mdl-snackbar__text"></div>' +
                    '<button class="mdl-snackbar__action" type="button"></button>' +
                 '</div>';
  $('body').append($compile(snackbarTemplate)($rootScope));

}

})();

(function() { 'use strict';

// Confirm Dialog Service
angular.module('ng-mdl')
.factory('MdlConfirm', MdlConfirm);

MdlConfirm.$inject = ['$rootScope'];

function MdlConfirm($rootScope) {

  // Init variables
  var mdlConfirmService = {};
  var confirmSelector = '#mdl-confirm-dialog';
  $rootScope.closeMdlDialog = hideConfirm;

  // Function declarations
  mdlConfirmService.open = open;

  // Function implementations
  function open(title,text,callback){
    var confirmDialog = document.querySelector(confirmSelector);
    $rootScope.mdlConfirmTitle = title;
    $rootScope.mdlConfirmText = text;
    $rootScope.mdlConfirmFunction = callback;
    confirmDialog.showModal();
  };

  function hideConfirm(answer) {
      var confirmDialog = document.querySelector(confirmSelector);
      if (confirmDialog.attributes.hasOwnProperty('open')){
        confirmDialog.close();
        $rootScope.mdlConfirmFunction(answer);
      }
  };

  // Return the service
  return mdlConfirmService;

};

})();

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