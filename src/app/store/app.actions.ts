import { createAction, props } from '@ngrx/store';
import { Employee } from '../components/employee/employee.models';

export const submitEmployee = createAction(
  '[Employee Page] SUBMIT EMPLOYEE',
  props<{ employee: Employee }>()
);

export const removeEmployee = createAction(
  '[Employee Page] REMOVE EMPLOYEE',
  props<{ id: number }>()
);
