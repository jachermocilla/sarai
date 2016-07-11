Package.describe({
  name: 'sarai:sarai-cms',
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
    "sarai:sarai-cms-data"
  ]

  api.use(packages)
  api.imply(packages)

  var client = [
    "client/components/dashboard/dashboard.html",
    "client/components/dashboard/dashboard-events.js",
    "client/components/dashboard/dashboard-helpers.js",
    "client/components/dashboard/dashboard-on-created.js",
    "client/components/dashboard/dashboard-route.js",

    "client/components/main/main-cms-route.js",

    "client/components/main/main-cms.html",
    "client/components/main/main-cms.less",
    "client/components/main/main-cms.js",

    "client/components/main/top-header-options.html",
    "client/components/main/top-header-options.js",

    "client/components/main/banner-options.html",
    "client/components/main/banner-options.js",

    "client/components/sarai-cms.less",
    "client/components/sarai-cms.js"
  ]

  api.addFiles(client, "client")

  api.addAssets([
    // "public/images/pest_banner.jpg",
    ], "client")
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-cms');
});
