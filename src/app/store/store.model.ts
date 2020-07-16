import { RegisterModel } from '../components/employee/employee.models';

export interface StoreModel {
  employees: RegisterModel[];
  posts: Array<any>;
}
