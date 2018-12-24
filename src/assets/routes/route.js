const navigationItems = Object.freeze({
  home: { title: 'Home', route: '/' },
  calender: { title: 'Calender', route: '/calender' }
});

export default Object.freeze({
  navigationItems,
  navigationBarItems: [
    { ...navigationItems.home,
    }
  ]
});
