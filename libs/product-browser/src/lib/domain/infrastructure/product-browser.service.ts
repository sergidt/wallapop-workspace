import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../entities/product';

@Injectable({ providedIn: 'root' })
export class ProductBrowserService {

    getAllProducts(): Observable<Array<Product>> {
        return of([
            {
                id: 1,
                name: 'Bicicleta',
                description: 'Bicicleta de montaña para adulto',
                img: 'https://cyrusher.es/cdn/shop/products/2.png?v=1676875056&width=823',
                price: 2000
            }
        ]);
    }
}
