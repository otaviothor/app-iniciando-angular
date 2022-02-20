import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { PrimeiroComponentComponent } from './primeiro-component/primeiro-component.component';

@NgModule({
  declarations: [AppComponent, PrimeiroComponentComponent],
  imports: [BrowserModule, CursosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
