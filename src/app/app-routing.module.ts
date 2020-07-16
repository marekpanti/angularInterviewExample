import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructionsComponent } from './components/instructions/instructions.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'instructions', component: InstructionsComponent },
  {
    path: 'employees',
    loadChildren: () =>
      import('./modules/employee.module').then((m) => m.EmployeeModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/posts.module').then((m) => m.PostsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
