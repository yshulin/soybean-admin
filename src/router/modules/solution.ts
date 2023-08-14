const solution: AuthRoute.Route = {
  name: 'solution',
  path: '/solution',
  component: 'basic',
  children: [
    {
      name: 'solution_list',
      path: '/solution/list',
      component: 'self',
      meta: {
        title: '排查方案列表',
        requiresAuth: true,
        icon: 'icon-park-outline:analysis',
        i18nTitle: 'routes.solution.list'
      }
    },
    {
      name: 'solution_fast-crud',
      path: '/solution/fast-crud',
      component: 'self',
      meta: {
        title: '排查方案列表2',
        requiresAuth: true,
        icon: 'icon-park-outline:analysis',
        i18nTitle: 'routes.solution.list'
      }
    }
  ],
  meta: {
    title: '排查方案管理',
    icon: 'mdi:monitor-dashboard',
    order: 2,
    i18nTitle: 'routes.solution._value'
  }
};

export default solution;
