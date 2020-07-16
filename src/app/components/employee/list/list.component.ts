import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterModel } from '../employee.models';
import { Store } from '@ngrx/store';
import { removeEmployee } from 'src/app/store/app.actions';
import { StoreModel } from 'src/app/store/store.model';
import { DeleteUndoService } from 'src/app/shared/navbar/delete-undo/delete-undo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  employees$: Observable<any>;
  constructor(
    private store: Store<{ appReducer: StoreModel }>,
    private countDown: DeleteUndoService
  ) {
    this.employees$ = this.store.select<RegisterModel[]>(
      (state) => state.appReducer.employees
    );
  }
  // remove(index) {
  //   this.store.dispatch(removeEmployee({ id: index }));
  // }

  // In this example we are not using unique ID
  remove(index) {
    this.countDown.addCountDown(index, this.removeRow.bind(this, index));
  }

  removeRow(index) {
    this.store.dispatch(removeEmployee({ id: index }));
  }
}
