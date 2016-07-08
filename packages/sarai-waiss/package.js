Package.describe({
  name: 'sarai:sarai-waiss',
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
    "sarai:sarai-layout"
  ]

  api.use(packages)
  api.imply(packages)

  var client = [
      "client/components/waiss-explore/waiss-explore.html",
      "client/components/waiss-explore/route.js",
      "client/components/waiss-main/waiss-main.html",
      "client/components/waiss-main/waiss-main.less",
      "client/components/waiss-main/waiss-main.js",
      "client/components/waiss-main/route.js",
      "client/components/waiss-main/on-created.js",
      "client/components/waiss-create-farm/waiss-create-farm.html",
      "client/components/waiss-create-farm/route.js",
      "client/layout/waiss-layout.html",
      "client/layout/waiss-layout.less",
      "client/includes/login-middleware.html"
  ]

  api.addFiles(client, "client")
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-waiss');
});
