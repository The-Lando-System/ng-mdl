# ng-mdl
Angular Services for Material Design Lite Components

Download:
<pre>bower install ng-mdl</pre>

Add to Module:
<pre>
  angular.module('my-app', [
    'ng-mdl'
  ]);
</pre>

MDL Snackbar
<pre>
angular.module('my-app')
.controller('MyController', MyController);

MyController.$inject = ['MdlSnackbar'];

function UserMgmtController(MdlSnackbar) {
  MdlSnackbar.success("I'm a successful snackbar message!",2000);
}
</pre>

Full Usage:
<pre>
  message = 'String containing message';
  timeToLive = 1000  // Time in milliseconds until snackbar fades

  MdlSnackbar.notify(message,timeToLive);  // Black
  MdlSnackbar.success(message,timeToLive); // Green
  MdlSnackbar.info(message,timeToLive);    // Blue
  MdlSnackbar.warn(message,timeToLive);    // Orange
  MdlSnackbar.error(message,timeToLive);   // Red
</pre>
