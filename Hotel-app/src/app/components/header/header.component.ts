import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public faBars = faBars;
public state:number = 1;

  constructor() { 
    this.changeState()
  }

  ngOnInit(): void {
  }


  public onBurgerClick() {
    this.state === 0 ? this.state = 1  : this.state = 0; 
  }

  public changeState() {
    if(window.innerWidth < 794) {
      this.state = 0
    }
    else {
      this.state = 1
    }
    console.log(window.innerWidth);
    
  }
}
