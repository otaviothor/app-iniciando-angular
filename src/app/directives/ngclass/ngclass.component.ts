import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss'],
})
export class NgclassComponent {
  public isFavorite: boolean = false;

  constructor() {}

  public toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }
}
