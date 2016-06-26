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