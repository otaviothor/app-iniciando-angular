import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  public book: any = {
    title: 'lorem ipsum dolor sit amet consectetur adipisicing elit',
    rating: 4.1261,
    pagesNumber: 300,
    price: 44.99,
    releaseDate: new Date(),
    url: 'http://otaviosilva.dev',
  };

  constructor() {}
}
