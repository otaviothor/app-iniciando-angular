import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss'],
})
export class NgswitchComponent {
  public tab: string = 'home';

  constructor() {}
}
