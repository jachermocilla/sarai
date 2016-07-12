Package.describe({
  name: 'sarai:sarai-layout',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  
  var packages = [
    "sarai:sarai-lib",
    "sarai:sarai-user",
    "sarai:sarai-main-data"
  ]

  api.use(packages)
  api.imply(packages)

  var client = [
    "client/includes/head.html",
<<<<<<< d1acf8b0005799c598112a37eee7d6d0a2360956
    "client/includes/top-header/index.html",
    "client/includes/top-header/index.less",
    "client/includes/top-header/helper.js",
    "client/includes/footer/index.html",
    "client/includes/footer/index.less",
    "client/includes/footer/helper.js",
    "client/includes/footer/on-created.js",
=======
>>>>>>> Removed old signin/signup in sarai-admin, removed top-bar and side-bar in sarai-layout
    "client/includes/main-header/index.html",
    "client/includes/main-header/index.js",
    "client/includes/main-header/index.less",
    "client/includes/main-header/on-created.js",
    "client/layout/main-layout/index.html",
    "client/layout/main-layout/index.less",
    "client/layout/main-layout/helper.js",
    "client/layout/cms-layout/index.html",
    "client/includes/cms-module-header/index.html",
    "client/includes/cms-module-header/index.js",
    "client/includes/fixed-drawer/index.html",
    "client/includes/fixed-drawer/index.less"
  ]

  api.addFiles(client, "client")

  api.addAssets([
    "public/footer-icons/call.png",
    "public/footer-icons/mail.png",
    "public/footer-icons/location.png"
    ], "client")

  api.export([
    "MainLayout"
    ])
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-layout');
});
