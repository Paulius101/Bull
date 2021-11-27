import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {Observer, PartialObserver} from "rxjs";
import {User} from "../../models/users";
import { MessagesService } from 'src/app/services/messages.service';
import {NotificationType} from "../../models/notification";
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private router:Router, private messagesService:MessagesService, private accessService: AccessService) { 
  }


  ngOnInit(): void {
  }

     public signUp(form: NgForm): void {
    if (form.invalid) {
      console.log("Invalid form data!");
      this.messagesService.postMessage({
        message: "Invalid form data!",
        type: NotificationType.Error
      });
      return;
    }

const username = form.controls.userEmail.value
const password = form.controls.password.value
console.log(username);
console.log(password);

// const passwordRepeat = form.control.passwordRepeat.value

    const user:User = {
      username:username,
      password:password
    }

    console.log(user);

     
    const observer: PartialObserver<Object> = {
      next: () => {
        this.messagesService.postMessage({
          message: "User registered",
          type: NotificationType.Success
        });

        this.router.navigate(["sign-in"]);
      },
      error: () => {
        this.messagesService.postMessage({
          message: "User already exists",
          type: NotificationType.Error
        });
      }
    };

    this.accessService.registerUser(user)
      .subscribe(observer);
  }
  

   public isValidEmail(email:any) {
        if (typeof email !== 'string' ||
            email.length < 6 ||
            email.indexOf('@') === -1 ||
            email[0] === '@' ||
            email.slice(-4).indexOf('@') > -1)  {
            return false;
        }
        return true;
    }


  
}
