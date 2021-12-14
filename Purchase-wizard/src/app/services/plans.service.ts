import { Injectable } from '@angular/core';
import { Plan } from '../models/plan';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
private _personalPlans:Plan[]=[]
private _enterprisePlans:Plan[]=[];
private _highestPricePlan:number = 0;
 

  constructor() { 
  this._personalPlans.push(new Plan(1,'OK', ['Lorem ipsum dolor sit amet consectetur adipisicing', 'Lorem ipsum dolor sit amet consectetur', 'Lorem ipsum dolor sit amet'], 5.99))
   this._personalPlans.push(new Plan(2,'Good', ['Lorem ipsum dolor sit amet consectetur adipisicing', 'Lorem ipsum dolor sit amet consectetur', 'Lorem ipsum dolor sit amet'], 9.99))
   this._personalPlans.push(new Plan(3,'Amazing', ['Lorem ipsum dolor sit amet consectetur adipisicing', 'Lorem ipsum dolor sit amet consectetur', 'Lorem ipsum dolor sit amet'], 15.99))

   this._enterprisePlans.push(new Plan(1,'OK', ['Lorem ipsum dolor sit amet consectetur adipisicing', 'Lorem ipsum dolor sit amet consectetur', 'Lorem ipsum dolor sit amet'], 9.99))
   this._enterprisePlans.push(new Plan(2,'Good', ['Lorem ipsum dolor sit amet consectetur adipisicing', 'Lorem ipsum dolor sit amet consectetur', 'Lorem ipsum dolor sit amet'], 19.99))
   this._enterprisePlans.push(new Plan(3,'Amazing', ['Lorem ipsum dolor sit amet consectetur adipisicing', 'Lorem ipsum dolor sit amet consectetur', 'Lorem ipsum dolor sit amet'], 29.99))
  }

  

  get returnPersonalPlans():Plan[] {
    return this._personalPlans
  }

  get returnEnterprisePlans():Plan[] {
    return this._enterprisePlans
  }

  public highestPrice(plans: Plan[]):number {
    let highest = -Infinity;
    for (let plan of plans) {
      if (plan.price > highest) {
        highest = plan.price
        this._highestPricePlan = plan.id
      }
    }

    
    return this._highestPricePlan
  }
}
