import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faDoorOpen, faMessage, faUserGroup,  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faBell = faBell;
  faMessage = faMessage;
  faUserGroup = faUserGroup;
  faDoorOpen = faDoorOpen;
}
