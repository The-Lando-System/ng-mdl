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