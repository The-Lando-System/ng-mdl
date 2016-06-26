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

  // Function implementations
  function closeDrawer(){
    document.body.querySelector('.mdl-layout__obfuscator.is-visible').click();
  };

  // Return the service
  return mdlConfirmService;

};

})();