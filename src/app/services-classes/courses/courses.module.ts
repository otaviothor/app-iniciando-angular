import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule],
  exports: [CoursesComponent],
  providers: [CoursesService],
})
export class CoursesModule {}
