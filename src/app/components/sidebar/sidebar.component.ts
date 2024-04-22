import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPeopleGroup, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { PerfilService } from '../../perfil.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  @Input() profileData: any;

  constructor(private perfilService: PerfilService, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    this.perfilData = this.perfilService.getProfile();
  }

  dataURI(data: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + data);
  }
}
