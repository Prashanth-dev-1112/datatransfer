import { HEROES } from './../../../data-transfer/src/hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  heroes = HEROES;
  master = 'Master';
}
