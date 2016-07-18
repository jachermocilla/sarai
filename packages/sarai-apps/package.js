Package.describe({
  name: 'sarai:sarai-apps',
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
    "sarai:sarai-admin",
    "sarai:sarai-layout",
    "sarai:sarai-apps-data"
  ]

  api.use(packages)
  api.imply(packages)

  var client = [
    "client/components/sarai-apps-page/apps-page.html",
    "client/components/sarai-apps-page/apps-page.js",
    "client/components/sarai-apps-page/apps-page.less",
    "client/components/sarai-apps-page/apps-page-on-created.js",
    "client/components/sarai-apps-page/apps-page-on-rendered.js",
    "client/components/sarai-apps-page/route.js"
  ]

  api.addFiles(client, "client")

  api.addAssets([
    //"public/images/pest_banner.png"
    ], "client")
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-apps');
});
