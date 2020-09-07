import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openMenu() {
    console.log('welcome');
    const menu = document.getElementById('menu').classList.toggle('menu--open');
  }
}
