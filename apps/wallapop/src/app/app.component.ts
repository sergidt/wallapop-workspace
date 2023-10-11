import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductBrowserComponent } from '@wallapop/product-browser';

@Component({
    standalone: true,
    imports: [RouterModule, ProductBrowserComponent],
    selector: 'wallapop-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
}
