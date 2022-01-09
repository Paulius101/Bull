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
  constructor() {}

}
