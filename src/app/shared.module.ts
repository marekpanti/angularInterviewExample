import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { ourAppReducer } from './store/app.reducer';

@NgModule({
  imports: [StoreModule.forRoot({ appReducer: ourAppReducer })],
})
export class SharedModule {}
