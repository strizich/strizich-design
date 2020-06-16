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
      }, {
        name: 'Card',
        route: 'cards',
        type: 'link'
      }, {
        name: 'Chicklet',
        route: 'modals',
        type: 'link'
      }, {
        name: 'Forms',
        route: 'modals',
        type: 'link',
        children: [
          {
            name: 'Input',
            route: 'modals',
            type: 'link'
          }, {
            name: 'Radio',
            route: 'modals',
            type: 'link'
          }, {
            name: 'Checkbox',
            route: 'modals',
            type: 'link'
          }
        ]
      }, {
        name: 'Modals',
        route: 'modals',
        type: 'link'
      }, {
        name: 'Tooltip',
        route: 'modals',
        type: 'link'
      }
    ]
  }
]

export default navigationConfig
