import { Component, OnInit } from '@angular/core';
import { PlansService } from 'src/app/services/plans.service';
import { Plan } from 'src/app/models/plan';

@Component({
  selector: 'app-enterprise-tab',
  templateUrl: './enterprise-tab.component.html',
  styleUrls: ['./enterprise-tab.component.scss']
})
export class EnterpriseTabComponent implements OnInit {
public plans:Plan[]
  constructor(public plansService:PlansService) {
     this.plans = plansService.returnEnterprisePlans
   }

  ngOnInit(): void {
    this.plansService.highestPrice
  }

}
