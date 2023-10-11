import { Route } from '@angular/router';
import { NotFoundPageComponent } from '@wallapop/not-found-page';
import { userLoggedGuard } from '@wallapop/security';

export const appRoutes: Route[] = [
    {
        path: 'product-browser',
        loadChildren: () => import('@wallapop/product-browser').then(lib => lib.ROUTES),
        canActivate: [userLoggedGuard]
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
