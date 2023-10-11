import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SecurityService {
    $userLogged = signal(true);
}
