import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faComments,
  faHeart,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [FontAwesomeModule, CommentsComponent],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  faHeart = faHeart;
  faComments = faComments;
  faShare = faShare;
  clickedLike = false;
  clickedCommentary = false;

  @Input() profileImg!: string;
  @Input() profileName!: string;
  @Input() postData!: string;
  @Input() postImg!: string;
  @Input() postLike!: boolean;
  @Input() comments!: any[];
  @Output() addClickedLikeEvent = new EventEmitter<boolean>();

  constructor(){

  }

  

  ngOnInit() {
    this.clickedLike = this.postLike;
  }

  onClick() {
    this.clickedLike = !this.clickedLike;
    this.addClickedLikeEvent.emit(this.clickedLike);
    this.postLike = this.clickedLike;
  }

  onClickComment(){
    this.clickedCommentary = !this.clickedCommentary
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
