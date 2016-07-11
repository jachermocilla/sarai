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

}