Package.describe({
  name: 'sarai:sarai-core',
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
    'sarai:sarai-lib',
    'sarai:sarai-user-data',
    'sarai:sarai-layout',
    'sarai:sarai-pests',
    "sarai:sarai-pests-data",
    "sarai:sarai-pests-form-data",
    "sarai:sarai-assistance-data",
    "sarai:sarai-clinic-data",
    "sarai:sarai-experts-data",
    "sarai:sarai-log-data",
    "sarai:sarai-lab-data",
    "sarai:sarai-assistance-result-data",
    "sarai:sarai-report-data",
    "sarai:sarai-pests-report-data",
    "sarai:sarai-images-data"
    ]

  api.use(packages);
  api.imply(packages);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-core');
});
