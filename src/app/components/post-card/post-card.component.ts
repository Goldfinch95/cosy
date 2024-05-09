import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faComments,
  faHeart,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import { CommentsComponent } from '../comments/comments.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [FontAwesomeModule,FormsModule, CommentsComponent],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css',
})
export class PostCardComponent {
  faHeart = faHeart;
  faComments = faComments;
  faShare = faShare;
  clickedLike = false;
  clickedCommentary = false;
  inputValue = '';
  

@Input() profileData!: any;
  @Input() profileImg!: string;
  @Input() profileName!: string;
  @Input() postData!: string;
  @Input() postImg!: string;
  @Input() postLike!: boolean;
  @Input() comments!: any[];
  @Input() publicationId!: number;
  @Output() addClickedLikeEvent = new EventEmitter<boolean>();

  constructor(private http: HttpClient){
    
  }

  

  ngOnInit() {
    this.clickedLike = this.postLike;
    console.log(this.profileData)
  }

  async onEnter(){
      console.log(this.publicationId)
      if(this.inputValue === ''){
        return;
      }
      const newComment = {
        content: this.inputValue,
        image: null,
        publicationId: this.publicationId
      }
      this.inputValue = '';
      const token = localStorage.getItem('token');
      const comment = await lastValueFrom(this.http.post('http://localhost:13000/comments/create', newComment,{headers: {"Authorization": `Bearer ${token}`}}));
      location.reload()
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
