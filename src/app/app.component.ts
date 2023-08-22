import { Component, QueryList, VERSION, ViewChildren } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  widgetNumbers = [1, 2, 3];
}