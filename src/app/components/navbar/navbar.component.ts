import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBell,
  faDoorOpen,
  faMessage,
  faSearch,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
faSearch;
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  faBell = faBell;
  faMessage = faMessage;
  faUserGroup = faUserGroup;
  faDoorOpen = faDoorOpen;
  faSearch = faSearch;

  notifications = [
    {
      profile_img: "https://avatars.githubusercontent.com/u/1561955?v=4",
      profile_name: "Miguel Angel Duran",
      value: 'notificationLike',
    },
    {
      profile_img: "https://avatars.githubusercontent.com/u/6494462?v=4",
      profile_name: "Gonzalo Pozzo",
      value: 'notificationComment',
    },
    {
      profile_img: "https://avatars.githubusercontent.com/u/15913811?v=4",
      profile_name: "Carmen Ansio",
      value: 'notificationComment',
    },
    {
      profile_img: "https://avatars.githubusercontent.com/u/90206336?v=4",
      profile_name: "Julian Ajras",
      value: 'notificationLike',
    },
  ];

  
}
