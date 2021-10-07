import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-base-form',
  template: ''
})
export class BaseFormcomponent {

  @Input() parentFormGroup: FormGroup;

  isValid(controlName: string): boolean {
    return this.parentFormGroup.get(controlName).valid;
  }

  isTouched(controlName: string): boolean {
    return this.parentFormGroup.get(controlName).touched;
  }


}
