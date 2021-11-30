import {Component, OnInit} from '@angular/core';
import { User } from 'src/app/models/users';
import {AccessService} from "src/app/services/access.service";
import {MessagesService} from "src/app/services/messages.service";
import {NotificationType} from "src/app/models/notification";
import {Router} from "@angular/router";
import {
  gsap
} from 'gsap';

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public user: User;

  constructor(private accessService: AccessService,
              private messagesService: MessagesService,
              private router: Router) {
    this.user = {
      username: "",
      password: ""
    };
  }

  ngOnInit(): void {
    const listAnim = gsap.timeline({
      defaults: {
        ease: "power1.out"
      }
    });
    listAnim.fromTo(".sign-in", {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1
    }, "3");
  }

  public login(): void {
    this.accessService.login(this.user).subscribe({
      next: (response) => {
        console.log(response);

        this.accessService.setToken(response.token);

        this.router.navigate(["/profile"]);
      },
      error: () => {
        this.messagesService.postMessage({
          message: "Invalid details",
          type: NotificationType.Error
        });
      }
    });
  }
}