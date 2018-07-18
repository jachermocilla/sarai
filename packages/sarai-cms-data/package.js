Package.describe({
  name: 'sarai:sarai-cms-data',
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
    // "sarai:sarai-clinic-data"
  ]

  api.use(packages)
  api.imply(packages)

  var lib = [
    "lib/collections/record-counts.js",
    "lib/collections/cms.js",
  ]

  api.addFiles(lib, ["client", "server"])

  var server = [
    "server/publications.js",
    "server/main-methods.js",
    "server/about-methods.js",
    "server/service-methods.js",
    "server/upload-methods.js",
    "server/weather-methods.js",
    "server/fixtures.js",
    "server/rainfall-methods.js"
  ]

  api.addFiles(server, "server")

  api.addAssets([
    ], "client")

  api.export([
    "RecordCounts",
    "CMS"
  ])
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
});
