import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from './Product';
import {ObjectValidators} from './ObjectValidators';
import * as _ from 'underscore';
import {CustomChangeEvent} from "./CustomChangeEvent";
import {ModalComponent} from "./modal.component";

@Component({
  selector: 'app-productcu',
  templateUrl: './product-cu.component.html'
})
export class ProductCUComponent implements OnChanges {
  productForm: FormGroup;
  nameControl;
  @Input() productNames: string[];
  @Input() editProduct: Product;
  @Output() productChange = new EventEmitter();

  constructor(private _fb: FormBuilder, private modal: ModalComponent) {}

  ngOnChanges() {
    if (this.editProduct) {
      this.productNames = _.without(this.productNames, this.editProduct.name);
    } else {
      this.editProduct = {name: ''};
    }
    this.productForm = this._fb.group({
      'name': [this.editProduct.name, [Validators.required, ObjectValidators.unique(this.productNames)]]
    });
    this.nameControl = this.productForm.controls['name'];
  }

  onClick() {
    let  obj: CustomChangeEvent = {
      type: 'new',
      value: this.productForm.value
    };
    if (this.editProduct.name) {
      obj = {
        type: 'edit',
        name: this.editProduct.name,
        value: this.productForm.value
      };
    }
    this.productChange.emit(obj);
    this.productForm.reset('');
    this.modal.closeModal();
  }

}
