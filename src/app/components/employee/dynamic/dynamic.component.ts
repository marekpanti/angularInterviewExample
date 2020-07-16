import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Positions } from '../employee.models';
import { Store } from '@ngrx/store';
import { submitEmployee } from 'src/app/store/app.actions';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent implements OnInit {
  public positions = Positions;
  public employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<{ appReducer }>) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      name: [
        null,
        { validators: [Validators.required, Validators.minLength(2)] },
      ],
      surname: [null, Validators.required],
      birthday: [null, Validators.required],
      position: [null, Validators.required],
      street: [null, Validators.required],
      houseNumber: [
        null,
        { validators: [Validators.required, Validators.pattern('^[0-9]*$')] },
      ],
      city: [null, Validators.required],
      postal: [null, Validators.required],
      number: [null, Validators.required],
      web: [null, Validators.required],
      email: [
        null,
        {
          validators: [Validators.required, Validators.email],
        },
      ],
      uuid: [null],
    });
  }

  submit() {
    this.employeeForm.controls.uuid.setValue(UUID.UUID());
    this.store.dispatch(submitEmployee({ employee: this.employeeForm.value })); // Cleaner solution would be to create a service Facade
    this.employeeForm.reset();
  }
}
