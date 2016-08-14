# ng-mdl
Angular Services for Material Design Lite Components

---

## Download:
<pre>bower install ngMdl</pre>

---

## Add to bower.json
```javascript
{
  "dependencies": {
    "angular": "latest",
    "material-design-lite": "latest",
    "ngMdl": "latest" // Needs material design lite and angular as dependencies
  }
}
```
---

## Add to Module:
```javascript
  angular.module('my-app', [
    'ng-mdl'
  ]);
```

---

## MDL Snackbar
### Example
```javascript
angular.module('my-app')
.controller('MyController', MyController);

MyController.$inject = ['MdlSnackbar'];

function UserMgmtController(MdlSnackbar) {
  MdlSnackbar.success("I'm a successful snackbar message!",2000);
}
```

### Full Usage:
```javascript
  message = 'String containing message';
  timeToLive = 1000  // Time in milliseconds until snackbar fades

  MdlSnackbar.notify(message,timeToLive);  // Black
  MdlSnackbar.success(message,timeToLive); // Green
  MdlSnackbar.info(message,timeToLive);    // Blue
  MdlSnackbar.warn(message,timeToLive);    // Orange
  MdlSnackbar.error(message,timeToLive);   // Red
```
## MDL Dialog
### Confirm
```javascript
angular.module('my-app')
.controller('MyController', MyController);

MyController.$inject = ['MdlDialog'];

function UserMgmtController(MdlDialog) {
  MdlDialog.confirm('Delete User','Are you sure you want to delete this user?',function(confirmed){
    if (confirmed){
      // If the user confirms the dialog...
    }
  });
}
```

### Alert
```javascript
  MdlDialog.alert('Alert Title','This is an alert message');
```

### Generic Dialog
HTML
```
<mdl-dialog dialog-id="login-id" dialog-title="Login">
  <!-- All Angular tags in here are transcluded -->
</mdl-dialog>
```
JS
```javascript
  // The dialog directive is opened and closed by its 'dialog-id' attribute
  MdlDialog.open('login-id');
  MdlDialog.close('login-id');
```

## MDL Utils

### Close Drawer

```javascript
angular.module('my-app')
.controller('MyController', MyController);

MyController.$inject = ['MdlSnackbar'];

function UserMgmtController(MdlUtils) {
 MdlUtils.closeDrawer(); // Closes a side bar drawer. See https://getmdl.io/components/#layout-section/layout
}
 
```
### Dirtify Inputs 
```javascript
// Finds all .mdl-textfield elements and makes them dirty.
// Useful for hovering input labels with existing data in the inputs
MdlUtils.makeMdlInputsDirty();
```

### Un-dirtify Inputs 
```javascript
// Finds all .mdl-textfield elements and makes them not dirty.
MdlUtils.makeMdlInputsClean();
```

### Validify Inputs 
```javascript
// Finds all .mdl-textfield elements and makes them valid.
MdlUtils.makeMdlInputsValid();
```
