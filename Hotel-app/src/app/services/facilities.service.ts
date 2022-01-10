import { Injectable } from '@angular/core';
import { facilities } from '../models/facilities';
@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {
public facilities: facilities[] = [
  {
    img: '../../../assets/facilities/gym.png',
    name: 'the gym'
  },
  {
    img: '../../../assets/facilities/bars.png',
name: 'poolside bar'
    },
    {
      img: '../../../assets/facilities/spa.png',
      name: 'the spa'
  },
  {
img:'../../../assets/facilities/pool.png',
name:'swimming pool'
  },
  {
    img:'../../../assets/facilities/restaurant.png',
    name:'restaurant'
  },
  {
    img:'../../../assets/facilities/laundry.png',
    name:'laundry'
  }
]
  constructor() { }
}
