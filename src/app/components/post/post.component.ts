import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faImage, faSmile } from '@fortawesome/free-solid-svg-icons';
faSmile
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  faImage = faImage;
  faSmile = faSmile;
}
