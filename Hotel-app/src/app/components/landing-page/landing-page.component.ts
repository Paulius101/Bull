import { Component, OnInit } from '@angular/core';
import {
  gsap
} from 'gsap';
import {faAngleLeft, faAngleRight  } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
faAngleLeft = faAngleLeft;
faAngleRight = faAngleRight
  constructor() { }

  ngOnInit(): void {
        const listAnim = gsap.timeline({
      defaults: {
        ease: "power1.out"
      }
    });
    listAnim.fromTo(".main-container", {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1
    }, "3");
  }

}
