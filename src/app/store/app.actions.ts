import { createAction, props } from '@ngrx/store';
import { RegisterModel } from '../components/employee/employee.models';

export const submitEmployee = createAction(
  '[Employee Page] SUBMIT EMPLOYEE',
  props<{ employee: RegisterModel }>()
);

export const removeEmployee = createAction(
  '[Employee Page] REMOVE EMPLOYEE',
  props<{ id: number }>()
);
