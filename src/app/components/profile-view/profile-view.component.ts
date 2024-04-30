import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faCalendar, faCamera, faEarth, faEyeSlash, faGear, faHome, faMarsAndVenus } from '@fortawesome/free-solid-svg-icons';
import { ModalSettingsComponent } from '../modal-settings/modal-settings.component';

@Component({
  selector: 'app-profile-view',
  standalone: true,
  imports: [FontAwesomeModule, ModalSettingsComponent],
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
  faEyeSlash = faEyeSlash;
}
