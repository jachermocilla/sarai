Package.describe({
  name: 'sarai:sarai-suitability-gallery',
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
    "sarai:sarai-suitability-gallery-data"
  ]

  api.use(packages)
  api.imply(packages)

  var client = [
    "client/components/sarai-suitability-gallery/index.html",
    "client/components/sarai-suitability-gallery/index.less",
    "client/components/sarai-suitability-gallery/events.js",
    "client/components/sarai-suitability-gallery/route.js",
    "client/components/sarai-suitability-gallery/helpers.js",
    "client/components/sarai-suitability-gallery/on-created.js"
  ]

  api.addFiles(client, "client")

  api.addAssets([], "client")
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-suitability-gallery');
});