import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faCalendar, faCamera, faEarth, faGear, faHome, faMarsAndVenus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './profile-view.component.html',
  styleUrl: './profile-view.component.css'
})
export class ProfileViewComponent {
  faCamera = faCamera;
  faBriefcase = faBriefcase;
  faHome= faHome;
  faCalendar = faCalendar;
  faEarth = faEarth;
  faMarsAndVenus = faMarsAndVenus;
  faGear = faGear;
}
