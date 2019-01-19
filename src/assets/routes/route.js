const navigationItems = Object.freeze({
  home: { title: 'Home', route: '/' },
  calender: { title: 'Calender', route: '/calender' },
  media: { title: 'Media', route: '/media' }
});

export default Object.freeze({
  navigationItems,
  navigationBarItems: [
    { ...navigationItems.home,
    }
  ]
});
