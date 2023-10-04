export default [
  {
    path: '/auth',
    layout: false,
    routes: [
      {
        path: '/auth/login',
        layout: false,
        name: 'login',
        component: './auth/Login',
      },
      {
        path: '/auth',
        redirect: '/auth/login',
      },
      {
        component: '404',
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    component: './dashboard',
  },
 

  {
    path: '/inventory',
    name: 'inventory',
    icon: 'cluster',
    routes: [
      {
        path: '/inventory',
        redirect: '/inventory/detail',
        exact: true,
      },
      {
        path: '/inventory/detail',
        name: 'inventory',
        component: './inventory',
        exact: true
      },
      {
        path: '/inventory/estimate',
        name: 'estimate',
        component: './inventory/estimate',
        exact: true
      },
      {
        path: '/inventory/import',
        name: 'import',
        component: './inventory/import',
        exact: true
      },
      {
        path: '/inventory/export',
        name: 'export',
        component: './inventory/export',
        exact: true
      },
      {
        path: '/inventory/suppliers',
        name: 'supplier',
        icon: 'contacts',
        component: './inventory/supplier',
        exact: true
      },
      {
        path: '/inventory/history',
        name: 'history',
        component: './inventory/history',
        exact: true
      },
    ]
  },
  {
    path: '/products',
    name: 'product',
    icon: 'experiment',
    routes: [
      {
        path: '/products',
        redirect: '/products/list',
        exact: true,
      },
      {
        name: 'list',
        path: '/products/list',
        component: './products/list',
        exact: true,
      },
      {
        path: '/products/categories',
        icon: 'table',
        name: 'category',
        component: './products/category',
      },
      {
        path: '/products/package',
        name: 'package',
        icon: 'gold',
        component: './products/package',
        exact: true
      },
      
    ],
  },
  {
    path: '/report',
    name: 'report',
    icon: 'barChart',
    component: './report',
  },
  {
    path: '/user',
    name: 'user',
    icon: 'team',
    component: './user',
  },
  {
    path: '/setting',
    name: 'setting',
    icon: 'setting',
    routes: [
      {
        path: '/setting',
        redirect: '/setting/permission',
        exact: true,
      },
      {
        path: '/setting/permission',
        name: 'permission',
        icon: 'insertRowLeft',
        component: './setting/permission',
      },
      {
        path: '/setting/warehouse',
        name: 'warehouse',
        icon: 'apartment',
        component: './setting/warehouse',
      },
    ]
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/account',
    routes: [
      {
        path: '/account/profile',
        component: './account/center',
      },
    ],
  },
  {
    component: '404',
  },
];
