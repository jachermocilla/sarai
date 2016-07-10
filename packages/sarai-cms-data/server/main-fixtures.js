if (Main.find().count() === 0) {
  Main.insert({
    name: 'topHeader',
    message: 'El Nino Watch',
    enabled: true,
  });

  Main.insert({
    name: 'header',
    links: [
      { name: 'Home', href: '/'},
      { name: 'About', href: '/about'},
      { name: 'Explore', href: '', links:
        [ {name: 'Sublink', href: ''} ]
      }
    ],
    enabled: true
  });

  Main.insert({
    name: 'banner',
    images: [
      {
        href: 'server/uploads/background.jpg',
        title: 'Project SARAI',
        text: 'SMARTER FARMERS SMARTER AGRICULTURE. Search through the different SARAI technologies and systems to know what, when, and where to plant.',
        buttonText: 'Explore'
      }
    ]
  })

}