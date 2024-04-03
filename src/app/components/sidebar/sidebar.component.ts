import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPeopleGroup, faUserGroup } from '@fortawesome/free-solid-svg-icons';
faPeopleGroup

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  faUserGroup = faUserGroup;
  faPeopleGroup = faPeopleGroup;
}
