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