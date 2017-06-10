import {Component, Input} from '@angular/core';
import {Product} from './Product';
import * as _ from 'underscore';
import {CustomChangeEvent} from './CustomChangeEvent';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input() products: Product[];
  productNames = _.pluck(this.products, 'name');

  constructor() {}

  whenProductChanged(event: CustomChangeEvent) {
    if (event.type === 'new') {
      this.products.push(event.value);
    } else {
      // An update event
      const pro = _.without(this.products, _.findWhere(this.products, {name: event.name}));
      pro.push(event.value);
      this.products = pro;
    }
    this.productNames = _.pluck(this.products, 'name');
  }

  onDelete(p: Product) {
    this.products = _.without(this.products, _.findWhere(this.products, p));
    this.productNames = _.pluck(this.products, 'name');
  }

}
