// users-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ProfileViewComponent } from '../../components/profile-view/profile-view.component';
import { ProfilePublicationsComponent } from '../../components/profile-publications/profile-publications.component';

@Component({
  selector: 'app-users-profile',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, ProfileViewComponent, ProfilePublicationsComponent],
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export default class UsersProfileComponent implements OnInit {
  userId: any;  // Inicializado con una cadena vacía

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');  // Si el id es null, asigna una cadena vacía
    });
  }

  
}
