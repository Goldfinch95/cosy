import { Component } from '@angular/core';
import { PostComponent } from '../../components/post/post.component';

@Component({
  selector: 'app-wall',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './wall.component.html',
  styleUrl: './wall.component.css'
})
export class WallComponent {

}
