import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  public url: string = '';
  public angularCourse: boolean = true;
  public imageUrl: string = '';
  public inputValue: string = '';
  public savedValue: string = '';
  public isMouseOver: boolean = false;
  public courseName: string = '';

  constructor() {
    this.url = 'https://loiane.training';
    this.imageUrl = 'http://lorempixel.com.br/400/200';
    this.courseName = 'Angular';
  }

  getValue(): number {
    return 1;
  }

  getCourseLike(): boolean {
    return true;
  }

  handleClickButton(): void {
    alert('ok');
  }

  onKeyUp(target: HTMLInputElement): void {
    this.inputValue = target.value;
  }

  saveValue(target: HTMLInputElement): void {
    this.savedValue = target.value;
  }

  onMouseOver(): void {
    this.isMouseOver = !this.isMouseOver;
  }

  onMouseOut(): void {
    this.isMouseOver = !this.isMouseOver;
  }

  public onChangedValue(event: any): void {
    console.log(typeof event);
    console.log(event);
  }
}
