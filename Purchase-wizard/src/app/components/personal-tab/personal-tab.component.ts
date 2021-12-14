import {
  Component,
  OnInit
} from '@angular/core';
import {
  Plan
} from 'src/app/models/plan';
import {
  PlansService
} from 'src/app/services/plans.service';

@Component({
  selector: 'app-personal-tab',
  templateUrl: './personal-tab.component.html',
  styleUrls: ['./personal-tab.component.scss']
})
export class PersonalTabComponent implements OnInit {
  public plans: Plan[]

  constructor(public plansService: PlansService) {
    this.plans = plansService.returnPersonalPlans
  }

  ngOnInit(): void {
    this.plansService.highestPrice(this.plans)
  }


}
