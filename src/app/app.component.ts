import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // encapsulation: ViewEncapsulation.Native
})
export class AppComponent {

  items: [{title: string, time: string}] = [];

  updateArr(item : {title: string, time: string}){
    this.items.push(item);
  }

  inputChanged(input){
    console.log(input);
  }
}
