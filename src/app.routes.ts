import { Routes } from '@angular/router';
import { Notfound } from './app/pages/notfound/notfound';
import { Layout0Component } from './app/layout/component/layout-0/layout-0.component';
import { Content0Component } from './app/pages/content/content-0.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: Layout0Component,
        children: [
            { path: '', component: Content0Component},
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ]
    },
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];
