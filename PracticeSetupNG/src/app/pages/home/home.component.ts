import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trash = [
    {
      title: 'My Project 1', desc: 'Trash', NfO: 'something else'
    },
    {
      title: 'My Project 2', desc: 'Trash', NfO: 'something else'
    },
    {
      title: 'My Project 3', desc: 'Trash', NfO: 'something else'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
