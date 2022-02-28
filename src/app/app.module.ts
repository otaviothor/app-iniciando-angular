import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { PrimeiroComponentComponent } from './primeiro-component/primeiro-component.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { MeuFormModule } from './meu-form/meu-form.module';
import { InputPropertyComponent } from './input-property/input-property.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponentComponent,
    DataBindingComponent,
    InputPropertyComponent,
  ],
  imports: [BrowserModule, CursosModule, FormsModule, MeuFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
