import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructionsComponent } from './components/instructions/instructions.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'instructions', component: InstructionsComponent },
  {
    path: 'employees',
    loadChildren: () =>
      import('./components/employee/employee.module').then(
        (m) => m.EmployeeModule
      ),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./components/posts/posts.module').then((m) => m.PostsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
