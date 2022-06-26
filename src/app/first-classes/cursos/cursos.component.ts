import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  public portalName: string = '';
  public courses: string[] = [];

  constructor() {
    this.portalName = 'https://loiane.training';
  }

  ngOnInit(): void {
    this.courses = ['Java', 'Angular', 'React'];
  }
}
