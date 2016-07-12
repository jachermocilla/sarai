Template.registerHelper('cmsBlockContentRowClasses', () => {
    return {
      class: 'mdl-cell mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone'
    }
});

showToast = (message) => {
  'use strict';
  window['counter'] = 0;
  var snackbarContainer = document.querySelector('#cms-toast');
  snackbarContainer.MaterialSnackbar.showSnackbar({message});
}