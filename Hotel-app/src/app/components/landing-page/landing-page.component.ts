import {
  Component,
  OnInit
} from '@angular/core';
import {
  gsap
} from 'gsap';
import {
  faAngleLeft,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import {
  TestimonialsService
} from 'src/app/services/testimonials.service';
import {
  testimonial
} from 'src/app/models/testimonial';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public faAngleLeft = faAngleLeft;
  public faAngleRight = faAngleRight;

  constructor(public testimonialsService: TestimonialsService) {

  }



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
