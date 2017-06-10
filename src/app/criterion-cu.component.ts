import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {ModalComponent} from './modal.component';
import {Criterion} from './criterion';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ObjectValidators} from './ObjectValidators';
import * as _ from 'underscore';
import {CustomChangeEvent} from './CustomChangeEvent';

@Component({
  selector: 'app-criterioncu',
  templateUrl: './criterion-cu.component.html'
})
export class CriterionCUComponent implements OnChanges {
  criterionForm: FormGroup;
  nameControl;
  weightControl;
  @Input() criterionNames: string[];
  @Input() editCriterion: Criterion;
  @Output() criterionChange = new EventEmitter();

  constructor(private modal: ModalComponent, private _fb: FormBuilder) {
  }

  ngOnChanges() {
    if (this.editCriterion) {
      this.criterionNames = _.without(this.criterionNames, this.editCriterion.name);
    } else {
      this.editCriterion = { name: '', weight: 1};
    }
    this.criterionForm = this._fb.group({
      'name': [this.editCriterion.name, [Validators.required, ObjectValidators.unique(this.criterionNames)]],
      'weight': [this.editCriterion.weight, [Validators.required, Validators.pattern('[0-9]*')]]
    });
    this.nameControl = this.criterionForm.controls['name'];
    this.weightControl = this.criterionForm.controls['weight'];
  }

  onClick() {
    let  obj: CustomChangeEvent = {
      type: 'new',
      value: this.criterionForm.value
    };
    if (this.editCriterion.name) {
      obj = {
        type: 'edit',
        name: this.editCriterion.name,
        value: this.criterionForm.value
      };
    }
    this.criterionChange.emit(obj);
    this.criterionForm.reset('');
    this.modal.closeModal();
  }
}

