import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  public portalName: string = '';
  public courses: string[] = [];

  constructor(private coursesService: CoursesService) {
    this.portalName = 'https://loiane.training';
  }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }
}
