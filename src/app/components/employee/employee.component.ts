import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  formType = '';

  selectFormType(formType) {
    switch (formType) {
      case 'template':
        formType === this.formType
          ? (this.formType = '')
          : (this.formType = formType);
        break;
      case 'reactive':
        formType === this.formType
          ? (this.formType = '')
          : (this.formType = formType);
        break;
      default:
        break;
    }
  }
}
