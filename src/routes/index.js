import createLazyViewLoader from './createLazyViewLoader';

export default {
    path: '/login',
    indexRoute: {
        component: createLazyViewLoader(cb => {
            require.ensure([], require => cb(require('VIEW/App')));
        })
    },

    childRoutes: [
        {
            path: 'index',
            component: createLazyViewLoader(cb => {
                require.ensure([], require => cb(require('VIEW/App')));
            })
        },

        // 无路由匹配的情况一定要放到最后，否则会拦截所有路由
        {
            path: '*',
            component: createLazyViewLoader(cb => {
                require.ensure([], require => cb(require('VIEW/404')));
            })
        }
    ]
};
