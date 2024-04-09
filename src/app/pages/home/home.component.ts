import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { WallComponent } from '../wall/wall.component';
import { PostCardComponent } from '../../components/post-card/post-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,SidebarComponent, WallComponent, PostCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
