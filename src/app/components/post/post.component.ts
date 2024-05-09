import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faImage, faSmile } from '@fortawesome/free-solid-svg-icons';
import { PerfilService } from '../../perfil.service';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  faImage = faImage;
  faSmile = faSmile;

  inputValue = '';
  selectedFile: File | null = null;
  selectedFileDataUrl: string | null = null;
  perfilData: any;

  @Input() publicationsData: any;
  @Input() profileData: any;
 

  constructor(private http: HttpClient, private perfilService: PerfilService, private router: Router) {}

  ngOnInit(): void {
    this.perfilData = this.perfilService.getProfile();
  }

 

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.getImageUrl(); // Llamar a getImageUrl() después de seleccionar el archivo
  }
  

  async onEnter(){
    if (this.inputValue.length < 4){
      return
    }
    const token = localStorage.getItem('token');
    const newPost = {
      content: this.inputValue,
      image: null,
      isPublic: true
    };
    const post = await lastValueFrom(this.http.post('http://localhost:13000/publications/create', newPost ,{headers: {"Authorization": `Bearer ${token}`}}));
    location.reload()  
  }

  getImageUrl(){
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedFileDataUrl = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}

/*export interface Publication {
  profile_img: string;
  profile_name: string;
  post_data: string;
  post_img: string;
}*/



  // Crear nuevo objeto con los datos nuevos
  

  // Agregar el nuevo objeto al array de publicaciones
  // Mostrar la copia actualizada en la consola
  

