import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'product-browser',
        loadComponent: () => import('@wallapop/product-browser').then(lib => lib.ProductBrowserComponent)
    },
    {
        path: '',
        redirectTo: 'product-browser',
        pathMatch: 'full'
    }
];
