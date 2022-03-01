import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-classes',
  templateUrl: './first-classes.component.html',
  styleUrls: ['./first-classes.component.scss'],
})
export class FirstClassesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'curso-angular';
  public initialValue: number = 10;
  public deleteCycle: boolean = false;

  public handleChangeValue(): void {
    this.initialValue++;
  }

  public handleDestroyCycle(): void {
    this.deleteCycle = true;
  }
}
