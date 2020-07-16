import { Component } from '@angular/core';
import { Employee, Positions } from '../employee.models';
import { Store } from '@ngrx/store';
import { UUID } from 'angular2-uuid';
import { submitEmployee } from '../../../store/app.actions';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent {
  positions = Positions;
  initialForm: Employee = {
    name: '',
    surname: '',
    birthday: '',
    position: '',
    street: '',
    houseNumber: null,
    city: '',
    postal: null,
    number: '',
    web: '',
    email: '',
    uuid: '',
  };
  form: Employee = { ...this.initialForm };

  constructor(private store: Store<{ appReducer }>) {}

  submit(form) {
    this.form.uuid = UUID.UUID();
    this.store.dispatch(submitEmployee({ employee: this.form })); // Cleaner solution would be to create a service Facade
    this.form = { ...this.initialForm };
    form.resetForm();
  }
}
