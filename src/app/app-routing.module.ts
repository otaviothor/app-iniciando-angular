import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { FirstClassesComponent } from './first-classes/first-classes.component';
import { ServicesClassesComponent } from './services-classes/services-classes.component';

const routes: Routes = [
  {
    path: 'first-classes',
    component: FirstClassesComponent,
  },
  {
    path: 'directives',
    component: DirectivesComponent,
  },
  {
    path: 'services',
    component: ServicesClassesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
