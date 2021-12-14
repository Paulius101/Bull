import { Component, OnInit, Input } from '@angular/core';
import { Rooms } from 'src/app/models/rooms';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
@Input() 
public room!:Rooms;

  constructor() { }

  ngOnInit(): void {
  }

}
