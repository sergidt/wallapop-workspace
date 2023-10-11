import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SecurityService } from './security.service';

export const userLoggedGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => inject(SecurityService).$userLogged();
