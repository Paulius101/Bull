import { Component, OnInit } from '@angular/core';
import {
  gsap
} from 'gsap';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
        const listAnim = gsap.timeline({
      defaults: {
        ease: "power1.out"
      }
    });
    listAnim.fromTo(".hero", {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1
    }, "3");
  }

}
