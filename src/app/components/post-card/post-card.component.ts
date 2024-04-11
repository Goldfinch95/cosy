import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faComments,
  faHeart,
  faShare,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  faHeart = faHeart;
  faComments = faComments;
  faShare = faShare;
  clickedLike = false;

  @Input() profileImg!: string;
  @Input() profileName!: string;
  @Input() postData!: string;
  @Input() postImg!: string;
  @Input() postLike!: boolean;
  @Output() addClickedLikeEvent = new EventEmitter<boolean>();

  ngOnInit() {
    this.clickedLike = this.postLike;
  }

  onClick() {
    this.clickedLike = !this.clickedLike;
    this.addClickedLikeEvent.emit(this.clickedLike);
    this.postLike = this.clickedLike;
  }
}

export interface Publication {
  profile: {
    img_profile: string;
    name_profile: string;
  };
  publication: {
    publication_text: string;
    publication_img: string;
    post_like: boolean;
  };
}
