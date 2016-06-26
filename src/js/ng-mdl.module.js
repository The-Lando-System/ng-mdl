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