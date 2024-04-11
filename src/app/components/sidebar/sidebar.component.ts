import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPeopleGroup, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { PerfilService } from '../../perfil.service';
PerfilService

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
  perfilData: any;

  constructor(private perfilService: PerfilService) {}

  ngOnInit(): void {
    this.perfilData = this.perfilService.getProfile();
  }
}
