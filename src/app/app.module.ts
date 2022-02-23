import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { PrimeiroComponentComponent } from './primeiro-component/primeiro-component.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PrimeiroComponentComponent, DataBindingComponent],
  imports: [BrowserModule, CursosModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
