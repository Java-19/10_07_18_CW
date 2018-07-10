import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  // title: string = 'Default title';
  // time: string = 'Default time';
  @Input('currentItem') item:{title:string,time:string};
}
