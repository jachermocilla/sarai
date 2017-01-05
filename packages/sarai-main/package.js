Package.describe({
  name: 'sarai:sarai-main',
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
    "sarai:sarai-main-data",
    "sarai:sarai-services-data",
    "sarai:sarai-blog-data",
    "sarai:sarai-weather-data"
  ]

  api.use(packages)
  api.imply(packages)

  var client = [
    "client/components/sarai-home/index.html",
    "client/components/sarai-home/events.js",

    "client/components/sarai-home/includes/banner/banner-events.js",
    "client/components/sarai-home/includes/banner/banner.html",
    "client/components/sarai-home/includes/banner/banner.js",
    "client/components/sarai-home/includes/banner/banner.less",
    "client/components/sarai-home/includes/banner/slider.html",
    "client/components/sarai-home/includes/banner/slider.js",
    "client/components/sarai-home/includes/banner/slider.less",

    "client/components/sarai-home/includes/crop-list/crop-list.html",
    "client/components/sarai-home/includes/crop-list/crop-list.js",
    "client/components/sarai-home/includes/crop-list/crop-list.less",

    "client/components/sarai-home/includes/services-list/services-list.html",
    "client/components/sarai-home/includes/services-list/services-list.js",
    "client/components/sarai-home/includes/services-list/services-list.less",

    "client/components/sarai-home/includes/reports/reports.html",
    "client/components/sarai-home/includes/reports/reports.js",
    "client/components/sarai-home/includes/reports/reports.less",

    "client/components/sarai-home/includes/blog-list/blog-list.html",
    "client/components/sarai-home/includes/blog-list/blog-list.js",
    "client/components/sarai-home/includes/blog-list/blog-list.less",

    "client/components/sarai-home/includes/testimonials/testimonials.html",
    "client/components/sarai-home/includes/testimonials/testimonials.js",
    "client/components/sarai-home/includes/testimonials/testimonials.less",

    "client/components/sarai-home/includes/weather-preview/preview.html",
    "client/components/sarai-home/includes/weather-preview/preview.js",
    "client/components/sarai-home/includes/weather-preview/preview.less",

<<<<<<< db011ef3f21ff019438d32f138866499db71fb7e
    "client/components/sarai-home/includes/weather-preview/forecast/preview-col-forecast.html",
    "client/components/sarai-home/includes/weather-preview/forecast/preview-col-forecast.less",
=======
    "client/components/sarai-home/includes/weather-preview/forecast/preview-col.html",
>>>>>>> Started on BOM style weather preview on main page

    "client/components/sarai-home/includes/weather-preview/forecast/forecast-view.html",
    "client/components/sarai-home/includes/weather-preview/forecast/forecast-view.js",
    "client/components/sarai-home/includes/weather-preview/forecast/forecast-view.less",

    "client/components/sarai-home/includes/weather-preview/concise/preview-col-concise.html",
<<<<<<< db011ef3f21ff019438d32f138866499db71fb7e
    "client/components/sarai-home/includes/weather-preview/concise/preview-col-concise.less",
=======
>>>>>>> Started on BOM style weather preview on main page
    "client/components/sarai-home/includes/weather-preview/concise/preview-col-concise.js",
    "client/components/sarai-home/includes/weather-preview/concise/concise-view.html",
    "client/components/sarai-home/includes/weather-preview/concise/concise-view.js",
    "client/components/sarai-home/includes/weather-preview/concise/concise-view.less",

    "client/components/sarai-home/includes/twitter-feed/twitter-feed.html",
    "client/components/sarai-home/includes/twitter-feed/twitter-feed.js",
    "client/components/sarai-home/includes/twitter-feed/twitter-feed.less",

    "client/components/sarai-home/route.js",
    "client/components/sarai-home/helpers.js",
    "client/components/sarai-home/on-created.js",

    "lib/weather-preview/preview-helpers.js",
    "lib/weather-preview/preview-sample-data.js"
  ]

  api.addFiles(client, "client")

  api.addAssets([
    //"public/images/pest_banner.png"
    ], "client")
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-main');
});
