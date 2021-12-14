import { Injectable } from '@angular/core';
import { Rooms } from '../models/rooms';
import {
  HttpClient
} from "@angular/common/http";
import {
  Observable
} from "rxjs";
import {
  AccessService
} from './access.service';
import {
  MessagesService
} from './messages.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
private _rooms: Rooms[] = []

  constructor(public http: HttpClient, private messageService: MessagesService,
    private accessService: AccessService, public router:Router) { }

    public get rooms(): Rooms[] {
    return this._rooms;
}

  public getItems(): void {
    if (!this.accessService.token)
      throw new Error("You need access token for this request");
    const request = this.http.get(`http://localhost:3000/api/room`, {
      headers: {
        "X-AUTH-HEADER": this.accessService.token
      },
      params: {
        testParam: 123
      }
    });

    request.subscribe((response: any) => {
      console.log("Get items response:", response);
      this._rooms = response;
    });
  }

    public getRoomBySpace(space: number): Rooms {
    const roomResult = this._rooms.find((obj: Rooms) => obj.space == space)
    if (roomResult !== undefined) {
      return roomResult
    }
    return this._rooms[0]
  }
}
  
