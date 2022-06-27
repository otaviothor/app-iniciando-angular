import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectivesComponent } from './directives/custom-directives/custom-directives.component';
import { DirectivesComponent as DirectiveComponent } from './directives/directives.component';
import { ElvisOperatorComponent } from './directives/elvis-operator/elvis-operator.component';
import { NgContentComponent } from './directives/ng-content/ng-content.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';
import { NgforComponent } from './directives/ngfor/ngfor.component';
import { NgifComponent } from './directives/ngif/ngif.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { NgswitchComponent } from './directives/ngswitch/ngswitch.component';
import { CursosModule } from './first-classes/cursos/cursos.module';
import { DataBindingComponent } from './first-classes/data-binding/data-binding.component';
import { DirectivesComponent } from './first-classes/directives/directives.component';
import { FirstClassesComponent } from './first-classes/first-classes.component';
import { InputPropertyComponent } from './first-classes/input-property/input-property.component';
import { LifeCycleComponent } from './first-classes/life-cycle/life-cycle.component';
import { MeuFormModule } from './first-classes/meu-form/meu-form.module';
import { OutputPropertyComponent } from './first-classes/output-property/output-property.component';
import { PrimeiroComponentComponent } from './first-classes/primeiro-component/primeiro-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoursesModule } from './services-classes/courses/courses.module';
import { CreateCourseModule } from './services-classes/create-course/create-course.module';
import { ServicesClassesComponent } from './services-classes/services-classes.component';
import { HighlightMouseDirective } from './shared/directives/highlight-mouse.directive';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { NgElseDirective } from './shared/directives/ng-else.directive';
import { YellowBackgroundDirective } from './shared/directives/yellow-background.directive';
import { LogService } from './services/log/log.service';

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
    DirectiveComponent,
    NgswitchComponent,
    NgforComponent,
    NgclassComponent,
    NgstyleComponent,
    ElvisOperatorComponent,
    NgContentComponent,
    YellowBackgroundDirective,
    CustomDirectivesComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective,
    ServicesClassesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    FormsModule,
    MeuFormModule,
    CreateCourseModule,
    CoursesModule,
  ],
  providers: [LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
