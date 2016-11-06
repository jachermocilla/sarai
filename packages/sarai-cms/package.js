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
    "sarai:sarai-cms-data",
    "sarai:sarai-services-data"
  ]

  api.use(packages)
  api.imply(packages)

  var client = [
    //COMMON
    "client/common/cms-upload.html",
    "client/common/cms-upload.js",

    //COMMON
    "client/components/sarai-cms.less",
    "client/components/sarai-cms.js",

    //DASHBOARD
    "client/components/dashboard/dashboard.html",
    "client/components/dashboard/dashboard-events.js",
    "client/components/dashboard/dashboard-helpers.js",
    "client/components/dashboard/dashboard-on-created.js",
    "client/components/dashboard/dashboard-route.js",

    //MAIN CMS
    "client/components/main/main-cms-route.js",
    "client/components/main/main-cms.html",
    "client/components/main/main-cms.less",
    "client/components/main/main-cms.js",
    "client/components/main/top-header-options.html",
    "client/components/main/top-header-options.js",
    "client/components/main/header-options.html",
    "client/components/main/header-options.js",
    "client/components/main/banner-options.html",
    "client/components/main/banner-options.js",
    "client/components/main/banner-options.less",

    //ABOUT US
    "client/components/about-us/about-us-banner-options.html",
    "client/components/about-us/about-us-banner-options.js",

    "client/components/about-us/about-us-content-options.html",
    "client/components/about-us/about-us-content-options.js",

    "client/components/about-us/about-us-title-options.html",
    "client/components/about-us/about-us-title-options.js",

    "client/components/about-us/about-us-projects-options.html",
    "client/components/about-us/about-us-projects-options.js",

    "client/components/about-us/about-us-leaders-options.html",
    "client/components/about-us/about-us-leaders-options.js",

    "client/components/about-us/about-us-partners-options.html",
    "client/components/about-us/about-us-partners-options.js",

    "client/components/about-us/about-us-cms-route.js",
    "client/components/about-us/about-us-cms.html",
    "client/components/about-us/about-us-cms.js",
    "client/components/about-us/about-us-cms.less",


    //SERVICES CMS
    "client/components/services/services-route.js",
    "client/components/services/services-cms.html",
    "client/components/services/services-cms.less",
    "client/components/services/services-cms.js",
    "client/components/services/services-cms-edit-button.html",
    "client/components/services/services-cms-edit-button.js",
    "client/components/services/services-cms-delete-button.html",
    "client/components/services/services-cms-delete-button.js",

    "client/components/services/services-cms-form.html",
    "client/components/services/services-cms-form.js",
    "client/components/services/services-cms-form.css",

    "client/components/services/services-cms-edit-form.html",
    "client/components/services/services-cms-edit-form.js",
    "client/components/services/services-cms-edit-form.less",

    //Weather Stations
    "client/components/weather/weather-route.js",

    "client/components/weather/weather-cms.html",
    "client/components/weather/weather-cms.js",
    "client/components/weather/weather-cms.less",

    //index blocks
    "client/components/weather/index/weather-stations-block.html",
    "client/components/weather/index/weather-stations-block.js",
    "client/components/weather/index/weather-stations-block.less",
    "client/components/weather/index/weather-data-block.html",
    "client/components/weather/index/weather-data-block.js",
    "client/components/weather/index/weather-data-block.less",
    "client/components/weather/index/weather-settings-block.html",
    "client/components/weather/index/weather-settings-block.js",
    "client/components/weather/index/weather-settings-block.less",
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
