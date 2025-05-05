import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/decap_integration/blog',
    component: ComponentCreator('/decap_integration/blog', '873'),
    exact: true
  },
  {
    path: '/decap_integration/blog/2024/05/05/welcome',
    component: ComponentCreator('/decap_integration/blog/2024/05/05/welcome', '581'),
    exact: true
  },
  {
    path: '/decap_integration/blog/archive',
    component: ComponentCreator('/decap_integration/blog/archive', '5be'),
    exact: true
  },
  {
    path: '/decap_integration/docs',
    component: ComponentCreator('/decap_integration/docs', '53d'),
    routes: [
      {
        path: '/decap_integration/docs',
        component: ComponentCreator('/decap_integration/docs', '274'),
        routes: [
          {
            path: '/decap_integration/docs',
            component: ComponentCreator('/decap_integration/docs', 'dc2'),
            routes: [
              {
                path: '/decap_integration/docs/intro',
                component: ComponentCreator('/decap_integration/docs/intro', '87b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
