import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  public url: string = '';
  public angularCourse: boolean = true;
  public imageUrl: string = '';
  public inputValue: string = '';
  public savedValue: string = '';
  public isMouseOver: boolean = false;

  constructor() {
    this.url = 'https://loiane.training';
    this.imageUrl = 'http://lorempixel.com.br/400/200';
  }

  ngOnInit(): void {}

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
}
