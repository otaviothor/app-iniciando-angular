import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstClassesComponent } from './first-classes/first-classes.component';

const routes: Routes = [
  {
    path: 'first-classes',
    component: FirstClassesComponent,
  },
  {
    path: 'other-classes',
    component: FirstClassesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
