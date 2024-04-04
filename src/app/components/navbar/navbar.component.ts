import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBell, faDoorOpen, faMessage, faSearch, faUserGroup,  } from '@fortawesome/free-solid-svg-icons';
faSearch
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faBell = faBell;
  faMessage = faMessage;
  faUserGroup = faUserGroup;
  faDoorOpen = faDoorOpen;
  faSearch = faSearch;
}
