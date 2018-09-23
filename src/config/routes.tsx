import * as React from 'react';
import IRoute from '../interfaces/IRoute';
import Home from '../pages/Home/Home';
import Test from '../pages/TestPage';

const routes: IRoute[] = [
    {
        id: 'home',
        component: Home,
        exact: true,
        locale: {
            pl: {
                url: '/',
                label: 'Dom'
            },
            en: {
                url: '/',
                label: 'Home'
            },
            de: {
                url: '/',
                label: 'Haus'
            }
        }
    },
    {
        id: 'testPage',
        component: Test,
        exact: true,
        locale: {
            pl: {
                url: '/pl-test',
                label: 'Test Polska'
            },
            en: {
                url: '/en-test',
                label: 'Test English'
            },
            de: {
                url: '/de-test',
                label: 'Test DE'
            }
        }
    }
];

export default routes;