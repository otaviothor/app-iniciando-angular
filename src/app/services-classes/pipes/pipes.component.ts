import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  public book: any = {
    title: 'lorem ipsum',
    rating: 4.1261,
    pagesNumber: 300,
    price: 44.99,
    releaseDate: new Date(),
    url: 'http://otaviosilva.dev',
  };

  constructor() {}

  ngOnInit(): void {}
}
