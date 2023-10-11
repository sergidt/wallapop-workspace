import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SecurityService {
    $userLogged = signal(false);

    constructor() {
        setTimeout(this.setUserLogged, 10000);
    }

    setUserLogged() {
        this.$userLogged.set(true);
    }
}
