import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProductBrowserService } from './domain/infrastructure/product-browser.service';

@Component({
    selector: 'wallapop-product-browser',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product-browser.component.html',
    styleUrls: ['./product-browser.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductBrowserComponent {
    private service = inject(ProductBrowserService);
    products$ = this.service.getAllProducts();
}
