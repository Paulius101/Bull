import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public faBars = faBars;
public state:number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  public onBurgerClick() {
    this.state === 0 ? this.state = 1  : this.state = 0; 
  }
}
