(function() { 'use strict';

// Module Definition
angular.module('ng-mdl', []);

})();

(function() { 'use strict';

// Run when module loads
angular.module('ng-mdl')
.run(RunNgMdl);

function RunNgMdl($rootScope,$compile){

  // Append the confirm dialog to the body
  var confirmDialogTemplate = '<dialog id="mdl-confirm-dialog" class="mdl-dialog">' +
                  '<h3 class="mdl-dialog__title">{{mdlConfirmTitle}}</h3>' +
                  '<div class="mdl-dialog__content">' +
                    '<p>{{mdlConfirmText}}</p>' +
                  '</div>' +
                  '<div class="mdl-dialog__actions">' +
                    '<button ng-click="closeMdlConfirmDialog(true);" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Yes</button>' +
                    '<button ng-click="closeMdlConfirmDialog(false);" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">No</button>' +
                  '</div>' +
                 '</dialog>'
  $('body').append($compile(confirmDialogTemplate)($rootScope));

  // Append the alert dialog to the body
  var alertDialogTemplate = '<dialog id="mdl-alert-dialog" class="mdl-dialog">' +
                  '<h3 class="mdl-dialog__title">{{mdlAlertTitle}}</h3>' +
                  '<div class="mdl-dialog__content">' +
                    '<p>{{mdlAlertText}}</p>' +
                  '</div>' +
                  '<div class="mdl-dialog__actions">' +
                    '<button ng-click="closeMdlAlertDialog();" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">OK</button>' +
                  '</div>' +
                 '</dialog>'
  $('body').append($compile(alertDialogTemplate)($rootScope));

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

angular.module('ng-mdl')
.directive('mdlDialog', MdlDialogDirective);

function MdlDialogDirective() {
  return {
    template: '<dialog ng-attr-id="{{ \'mdl-dialog-\' + dialogId }}" class="mdl-dialog">' +
                '<h3 class="mdl-dialog__title">{{dialogTitle}}</h3>' +
                '<div class="mdl-dialog__content" ng-transclude>' +
                '</div>' +
              '</dialog>',
    scope: {
      dialogId: '@',
      dialogTitle: '@'
    },
    restrict: 'E',
    transclude: true
  };
};

})();
(function() { 'use strict';

// Confirm Dialog Service
angular.module('ng-mdl')
.factory('MdlDialog', MdlDialog);

MdlDialog.$inject = ['$rootScope'];

function MdlDialog($rootScope) {

  // Init variables
  var mdlDialogService = {};
  
  var dialogSelector = '#mdl-dialog-';
  var confirmSelector = '#mdl-confirm-dialog';
  var alertSelector = '#mdl-alert-dialog';
  
  $rootScope.closeMdlConfirmDialog = hideConfirm;
  $rootScope.closeMdlAlertDialog = hideAlert;

  // Function declarations
  mdlDialogService.open = openDialog;
  mdlDialogService.alert = openAlert;
  mdlDialogService.confirm = openConfirm;
  mdlDialogService.close = closeDialog;


  // Function implementations
  function openAlert(title,text){
    var alertDialog = document.querySelector(alertSelector);
    $rootScope.mdlAlertTitle = title;
    $rootScope.mdlAlertText = text;
    alertDialog.showModal();
  };

  function hideAlert() {
      var alertDialog = document.querySelector(alertSelector);
      close(alertDialog);
  };
   
  function openConfirm(title,text,callback){
    var confirmDialog = document.querySelector(confirmSelector);
    $rootScope.mdlConfirmTitle = title;
    $rootScope.mdlConfirmText = text;
    $rootScope.mdlConfirmFunction = callback;
    confirmDialog.showModal();
  };

  function hideConfirm(answer) {
      var confirmDialog = document.querySelector(confirmSelector);
      if (!confirmDialog){
        console.log('WARNING! Failed to close dialog... Could not select the MDL dialog component');
      } else {
        if (confirmDialog.attributes.hasOwnProperty('open')){
          confirmDialog.close();
          $rootScope.mdlConfirmFunction(answer);
        }
      }
  };

  function openDialog(id){
    var dialog = document.querySelector(dialogSelector + id);
    if (!dialog){
      console.log('WARNING! Failed to open dialog... Could not select the MDL dialog with ID: ' + id);
    } else {
      dialog.showModal();
    }
  };

  function closeDialog(id) {
    var dialog = document.querySelector(dialogSelector + id);
    close(dialog);
  }

  function close(dialog){
    if (!dialog){
      console.log('WARNING! Failed to close dialog... Could not select the MDL dialog component');
    } else {
      if (dialog.attributes.hasOwnProperty('open')){
        dialog.close();
      }
    }
  };

  // Return the service
  return mdlDialogService;

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
(function() { 'use strict';

// Confirm Dialog Service
angular.module('ng-mdl')
.factory('MdlUtils', MdlUtils);

MdlUtils.$inject = [];

function MdlUtils() {

  // Init variables
  var mdlConfirmService = {};

  // Function declarations
  mdlConfirmService.closeDrawer = closeDrawer;
  mdlConfirmService.makeMdlInputsDirty = makeMdlInputsDirty;
  mdlConfirmService.makeMdlInputsClean = makeMdlInputsClean;
  mdlConfirmService.makeMdlInputsValid = makeMdlInputsValid;

  // Function implementations
  function closeDrawer(){
    document.body.querySelector('.mdl-layout__obfuscator.is-visible').click();
  };

  function makeMdlInputsDirty(){
    var inputs = document.querySelectorAll('.mdl-textfield');
    for (var i=0; i<inputs.length; i++){
      inputs[i].classList.add('is-dirty');
    }
  }

  function makeMdlInputsClean(){
    var inputs = document.querySelectorAll('.mdl-textfield');
    for (var i=0; i<inputs.length; i++){
      inputs[i].classList.remove('is-dirty');
    }
  }

  function makeMdlInputsValid(){
    var inputs = document.querySelectorAll('.mdl-textfield');
    for (var i=0; i<inputs.length; i++){
      inputs[i].classList.remove('is-invalid');
    }
  }

  // Return the service
  return mdlConfirmService;

};

})();