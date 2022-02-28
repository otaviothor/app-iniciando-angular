import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
})
export class OutputPropertyComponent implements OnInit {
  @Input() public value: number = 0;
  @Output() public changedValue: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public handleIncrement(): void {
    this.value++;
    this.changedValue.emit({
      newValue: this.value,
    });
  }

  public handleDecrement(): void {
    this.value--;
  }
}
