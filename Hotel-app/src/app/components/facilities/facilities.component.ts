import {
  Component,
  OnInit
} from '@angular/core';
import {
  TestimonialsService
} from 'src/app/services/testimonials.service';
import {
  faAngleLeft,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {
public faAngleLeft = faAngleLeft;
  public faAngleRight = faAngleRight;

  constructor(public testimonialsService: TestimonialsService) {}

  ngOnInit(): void {}

}
