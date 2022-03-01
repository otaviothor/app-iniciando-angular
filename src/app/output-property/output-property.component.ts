import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
})
export class OutputPropertyComponent implements OnInit {
  @Input() public value: number = 0;
  @Output() public changedValue: EventEmitter<any> = new EventEmitter();

  @ViewChild('inputField') public inputFieldValue: ElementRef =
    {} as ElementRef;

  constructor() {}

  ngOnInit(): void {}

  public handleIncrement(): void {
    console.log(this.inputFieldValue.nativeElement.value);
    this.inputFieldValue.nativeElement.value++;
    this.changedValue.emit({
      newValue: this.value,
    });
  }

  public handleDecrement(): void {
    this.inputFieldValue.nativeElement.value--;
  }
}
