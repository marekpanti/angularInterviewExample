import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';
import { StoreModel } from './store.model';

export const initialState: StoreModel = {
  employees: [
    {
      name: 'Janko',
      surname: 'Hrasko',
      birthday: '2020-04-01',
      position: '',
      street: 'Nejaka',
      houseNumber: 2,
      city: 'Br',
      postal: '2',
      number: '9',
      web: 'ask.sk',
      email: 'ask@ask.sk',
      uuid: '2',
    },
  ],
  posts: [],
};

const appReducer = createReducer(
  initialState,
  on(AppActions.submitEmployee, (state: StoreModel, { employee }) => {
    return {
      ...state,
      employees: [...state.employees, employee],
    };
  }),
  on(AppActions.removeEmployee, (state: StoreModel, { id }) => {
    // to get index of employee in array based on uuid
    const indexToRemove = state.employees
      .map((employee) => employee.uuid)
      .indexOf(id);
    return {
      ...state,
      employees: state.employees.filter(
        (item, index) => index !== indexToRemove // Filter() doesn't create refference and we are filtering/deleting employee
      ),
    };
  })
);

export function ourAppReducer(state: StoreModel, action) {
  return appReducer(state, action);
}
