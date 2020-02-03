const navigationConfig = [
  {
    name: '',
    children: [
      {
        name: 'Home',
        route: '/',
        type: 'link'
      },
      {
        name: 'Article',
        route: 'article',
        type: 'link'
      },
      {
        name: 'About',
        route: 'about',
        type: 'link'
      }
    ]
  },
  {
    name: 'Components',
    children: [
      {
        name: 'Buttons',
        route: 'buttons',
        type: 'link'
      },
      {
        name: 'Modals',
        route: 'modals',
        type: 'link'
      }
    ]
  }
]

export default navigationConfig
