const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'acceuil',
        component: () => import('pages/IndexPage.vue'),
      },
      { path: 'blog', component: () => import('src/pages/BlogPage.vue') },
      { path: 'achat', component: () => import('pages/AchatPage.vue') },
      { path: 'devis', component: () => import('src/pages/DevisPage.vue') },
      { path: 'bl', component: () => import('pages/BLPage.vue') },
      { path: 'tube', component: () => import('pages/TubePage.vue') },
      { path: 'poid', component: () => import('pages/PoidPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
