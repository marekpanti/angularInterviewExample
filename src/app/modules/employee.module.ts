import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from '../components/employee/template-driven/template-driven.component';
import { DynamicComponent } from '../components/employee/dynamic/dynamic.component';
import { ListComponent } from '../components/employee/list/list.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import { EmployeeRoutingModule } from '../components/employee/employee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/modules/shared.module';
import { DeleteUndoComponent } from '../components/delete-undo/delete-undo.component';
import { DeleteUndoService } from '../components/delete-undo/delete-undo.service';

@NgModule({
  declarations: [
    TemplateDrivenComponent,
    DynamicComponent,
    ListComponent,
    EmployeeComponent,
    DeleteUndoComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [DeleteUndoService],
})
export class EmployeeModule {}
