import { Component } from '@angular/core';
import { GetuserService } from './getuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor() { }

  ngOnInit() {
  }
}
