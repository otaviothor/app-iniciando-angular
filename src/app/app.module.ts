import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './first-classes/cursos/cursos.module';
import { PrimeiroComponentComponent } from './first-classes/primeiro-component/primeiro-component.component';
import { DataBindingComponent } from './first-classes/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { MeuFormModule } from './first-classes/meu-form/meu-form.module';
import { InputPropertyComponent } from './first-classes/input-property/input-property.component';
import { OutputPropertyComponent } from './first-classes/output-property/output-property.component';
import { LifeCycleComponent } from './first-classes/life-cycle/life-cycle.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './first-classes/navbar/navbar.component';
import { DirectivesComponent } from './first-classes/directives/directives.component';
import { FirstClassesComponent } from './first-classes/first-classes.component';
import { NgifComponent } from './directives/ngif/ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponentComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    LifeCycleComponent,
    FirstClassesComponent,
    NavbarComponent,
    DirectivesComponent,
    NgifComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormsModule,
    MeuFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
