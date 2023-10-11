import { Component, inject } from '@angular/core';
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
}
