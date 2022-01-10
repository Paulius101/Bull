import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
public faBars = faBars;
public navLinksVisibility:number = 1;
public activeHome: boolean = false;
public activeFacilities:boolean = false;
public activeRooms:boolean = false;
public activeContact:boolean = false;


  constructor(private route:ActivatedRoute) { 
    this.changeNavVisibility()
  }

  ngOnInit(): void {
if (this.route.snapshot.routeConfig?.path === 'landing-page' || this.route.snapshot.routeConfig?.path === ''  || this.route.snapshot.routeConfig?.path === '#breakfastInfo') {
  
this.activateHome()
  
}
if (this.route.snapshot.routeConfig?.path === 'facilities' ) {
this.activateFacilities()
  
}

  }


  public onBurgerClick() {
    this.navLinksVisibility === 0 ? this.navLinksVisibility = 1  : this.navLinksVisibility = 0; 
  }

  public changeNavVisibility() {
    if(window.innerWidth < 794) {
      this.navLinksVisibility = 0
    }
    else {
      this.navLinksVisibility = 1
    } 
  }

  public activateFacilities() {
 this.activeHome = false;
 this.activeFacilities = true;
 this.activeRooms = false;
 this.activeContact = false;
  }
public activateRooms() {
 this.activeHome = false;
 this.activeFacilities = false;
 this.activeRooms = true;
 this.activeContact = false;
  }
  public activateContact() {
 this.activeHome = false;
 this.activeFacilities = false;
 this.activeRooms = false;
 this.activeContact = true;
  }
  public activateHome() {
 this.activeHome = true;
 this.activeFacilities = false;
 this.activeRooms = false;
 this.activeContact = false;
  }

}
