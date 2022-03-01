import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
