import {
  Injectable
} from '@angular/core';
import {
  testimonial
} from '../models/testimonial';
@Injectable({
  providedIn: 'root'
})


export class TestimonialsService {
  public testimonials: testimonial[] = [{
      comment: "Calm, Serene, Retro – What a way to relax and enjoy",
      user: "Mr. and Mrs. Baxter, UK"
    },
    {
      comment: "Lorem ipsum dolor sit amet consectetur",
      user: "Mr anonymous"
    },
    {
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt voluptates dolor, doloremque at atque mollitia accusamus quis..",
      user: "Mr Important"
    }
  ];

   public currentTestimonial = 0;
  constructor() {}

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
}
