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
  public faAngleRight = faAngleRight
  public testimonials: testimonial[] = []
  public currentTestimonial = 0;

  constructor(testimonialsService: TestimonialsService) {
    this.testimonials = testimonialsService.testimonials
  }

public onPreviousClick() {
  const previous = this.currentTestimonial - 1;
  this.currentTestimonial = previous < 0 ? this.testimonials.length - 1 : previous;
    // console.log("previous clicked, new current testimonial is: ", this.currentTestimonial);
}

public onNextClick() {
    const next = this.currentTestimonial + 1;
    this.currentTestimonial = next === this.testimonials.length ? 0 : next;
    // console.log("next clicked, new current testimonial is: ", this.currentTestimonial);
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
