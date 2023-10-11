import { Component, computed, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductBrowserComponent } from '@wallapop/product-browser';
import { SecurityService } from '@wallapop/security';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
    standalone: true,
    imports: [RouterModule, ProductBrowserComponent, NzLayoutModule],
    selector: 'wallapop-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    securityService = inject(SecurityService);

    $userName = signal('sergi');

    constructor() {
        computed(() => {
            if (this.securityService.$userLogged())
                this.$userName.set('sergi is logged');
        });
    }
}
