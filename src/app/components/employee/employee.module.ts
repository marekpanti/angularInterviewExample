import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ListComponent } from './list/list.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteUndoComponent } from 'src/app/shared/navbar/delete-undo/delete-undo.component';
import { SharedModule } from 'src/app/shared.module';
import { DeleteUndoService } from 'src/app/shared/navbar/delete-undo/delete-undo.service';

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
