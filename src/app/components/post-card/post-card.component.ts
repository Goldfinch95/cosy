import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faComments, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  faHeart = faHeart;
  faComments = faComments;
  faShare = faShare;
}
