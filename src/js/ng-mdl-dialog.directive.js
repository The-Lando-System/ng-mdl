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