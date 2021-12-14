import { Component, OnInit, Input } from '@angular/core';
import { Plan } from 'src/app/models/plan';

@Component({
  selector: 'app-plan-card[plan]',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent implements OnInit {
  @Input()
  public plan!:Plan;

  constructor() {
}

  ngOnInit(): void {
  }

}
