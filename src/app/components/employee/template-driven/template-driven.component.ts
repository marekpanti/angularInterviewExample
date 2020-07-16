import { Component } from '@angular/core';
import { RegisterModel, Positions } from '../employee.models';
import { Store } from '@ngrx/store';
import { submitEmployee } from 'src/app/store/app.actions';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent {
  positions = Positions;
  initialForm: RegisterModel = {
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
  };
  form: RegisterModel = this.initialForm;

  constructor(private store: Store<{ appReducer }>) {}

  submit() {
    this.store.dispatch(submitEmployee({ employee: this.form })); // Cleaner solution would be to create a service Facade
  }
}
