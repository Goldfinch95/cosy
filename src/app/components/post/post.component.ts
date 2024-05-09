import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faImage, faSmile } from '@fortawesome/free-solid-svg-icons';
import { PerfilService } from '../../perfil.service';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  faImage = faImage;
  faSmile = faSmile;

  inputValue = '';
  inputUrlValue = '';
  selectedFile: File | null = null;
  selectedFileDataUrl: string | null = null;
  perfilData: any;

  @Input() publicationsData: any;
  @Input() profileData: any;

  constructor(
    private http: HttpClient,
    private perfilService: PerfilService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.perfilData = this.perfilService.getProfile();
  }

  async onEnter() {
    if (this.inputValue.length <= 4 && !this.inputUrlValue) {
      return;
    }
  
    const token = localStorage.getItem('token');
    const newPost = {
      content: this.inputValue,
      image: this.inputUrlValue || '', // Si no hay URL de imagen, se envía una cadena vacía
      isPublic: true,
    };
  
    const post = await lastValueFrom(
      this.http.post('http://localhost:13000/publications/create', newPost, {
        headers: { Authorization: `Bearer ${token}` },
      })
    );
    location.reload();
  }
  
  
}
