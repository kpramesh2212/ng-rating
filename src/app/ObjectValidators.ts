import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import * as _ from 'underscore';

export class ObjectValidators {

  /**
   * For a given object array and uniqueProperty.
   * This method verifies, if the value in the abstract control is unique.
   *
   * Example: Consider
   * var array = [{name: 'ram', des: 'The lord Ram'}, {name: 'shiv', des: 'The lord of protection'}];
   * var uniqueProperty = 'name';
   * Now if the abstract control has any value that matches ram or shiv
   * then validator has failed and will return {unique: true}
   * else validator has succeeded and will return null
   *
   * @param array
   * @param uniqueProperty
   * @param control
   */
  static unique(array: Object[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!_.contains(array, control.value)) {
        return null;
      }
      return {unique: true};
    };
  }
}
