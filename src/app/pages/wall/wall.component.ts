import { Component } from '@angular/core';
import { PostComponent } from '../../components/post/post.component';
import { PostCardComponent } from '../../components/post-card/post-card.component';
PostCardComponent
@Component({
  selector: 'app-wall',
  standalone: true,
  imports: [PostComponent,PostCardComponent],
  templateUrl: './wall.component.html',
  styleUrl: './wall.component.css'
})
export class WallComponent {

}
