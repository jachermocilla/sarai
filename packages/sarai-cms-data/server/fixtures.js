if (CMS.find().count() === 0) {

  CMS.insert({
    name: 'navigationLinks',
    links: [
      {
        name: 'Dashboard',
        href: '/admin',
        permissions: []
      },
      {
        name: 'Main',
        href: '/admin/main',
        permissions: []
      },
      {
        name: 'About Us',
        href: '/admin/about-us',
        permissions: []
      }
    ]
  })
}