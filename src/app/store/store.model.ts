import { Employee } from '../components/employee/employee.models';

export interface StoreModel {
  employees: Employee[];
  posts: Array<any>;
}
