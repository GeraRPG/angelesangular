import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-cake-about',
  templateUrl: './cake-about.component.html',
  styleUrls: ['./cake-about.component.css']
})
export class CakeAboutComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  constructor() { }

  ngOnInit() {
  }

}
