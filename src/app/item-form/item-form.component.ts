import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {
  title: string = '';
  time: string = '';
  @Output('itemAdded') itemEmitter: EventEmitter = new EventEmitter<{title: string, time: string}>();
  @ViewChild('inputTime') inputTime: ElementRef;

  addItem(inputTitle: HTMLInputElement) {
    console.log(inputTitle);
    console.log(this.inputTime);
    this.itemEmitter.emit({
      // title:this.title,
      title: inputTitle.value,
      // time: this.time
      time: this.inputTime.nativeElement.value
    })
    // this.title = '';
    inputTitle.value = '';
    // this.time = '';
    this.inputTime.nativeElement.value = '';
  }
}
