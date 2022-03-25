import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { FirstClassesComponent } from './first-classes/first-classes.component';

const routes: Routes = [
  {
    path: 'first-classes',
    component: FirstClassesComponent,
  },
  {
    path: 'directives',
    component: DirectivesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
