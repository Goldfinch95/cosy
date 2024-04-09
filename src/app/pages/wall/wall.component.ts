import { Component } from '@angular/core';
import { PostComponent } from '../../components/post/post.component';
import { PostCardComponent } from '../../components/post-card/post-card.component';
import { PublicationsComponent } from '../../components/publications/publications.component';

@Component({
  selector: 'app-wall',
  standalone: true,
  imports: [PostComponent,PostCardComponent,PublicationsComponent],
  templateUrl: './wall.component.html',
  styleUrl: './wall.component.css'
})
export class WallComponent {

}
