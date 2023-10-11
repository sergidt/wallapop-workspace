import { Route } from '@angular/router';
import { NotFoundPageComponent } from '@wallapop/not-found-page';

export const appRoutes: Route[] = [
    {
        path: 'product-browser',
        loadComponent: () => import('@wallapop/product-browser').then(lib => lib.ProductBrowserComponent)
    },
    {
        path: '',
        redirectTo: 'product-browser',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
