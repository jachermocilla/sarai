Package.describe({
  name: 'sarai:sarai-blog',
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
    "sarai:sarai-blog-data"
  ]

  api.use(packages)
  api.imply(packages)

  var client = [
    "client/components/sarai-blog-page/blog-page.html",
    "client/components/sarai-blog-page/blog-page.js",
    "client/components/sarai-blog-page/blog-page.less",
    "client/components/sarai-blog-page/blog-page-on-created.js",
    "client/components/sarai-blog-page/blog-page-date.html",
    "client/components/sarai-blog-page/blog-page-date.js",
    "client/components/sarai-blog-page/blog-page-date.less",
    "client/components/sarai-blog-page/blog-page-date-on-created.js",
    "client/components/sarai-blog-page/blog-page-tag.html",
    "client/components/sarai-blog-page/blog-page-tag.js",
    "client/components/sarai-blog-page/blog-page-tag.less",
    "client/components/sarai-blog-page/blog-page-tag-on-created.js",
    "client/components/sarai-blog-page/blog-page-author.html",
    "client/components/sarai-blog-page/blog-page-author.js",
    "client/components/sarai-blog-page/blog-page-author.less",
    "client/components/sarai-blog-page/blog-page-author-on-created.js",
    "client/components/sarai-blog-page/route.js"
  ]

  api.addFiles(client, "client")

  api.addAssets([
    //"public/images/pest_banner.png"
    ], "client")
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('sarai:sarai-blog');
});
