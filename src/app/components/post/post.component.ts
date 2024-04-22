import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faImage, faSmile } from '@fortawesome/free-solid-svg-icons';
import { PerfilService } from '../../perfil.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
 

  constructor(private perfilService: PerfilService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.perfilData = this.perfilService.getProfile();
  }

  dataURI(data: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + data);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.getImageUrl(); // Llamar a getImageUrl() después de seleccionar el archivo
  }
  

  onEnter(){
    if (this.inputValue === ''){
      return
    }
    const AllPublications = this.publicationsData

    const newData = {
      profile_img: this.perfilData[0].apellido,
      profile_name: this.perfilData[0].nombre,
      post_data: this.inputValue,
      post_img: this.selectedFile ? URL.createObjectURL(this.selectedFile) : null
    };
    this.inputValue = ''
    this.selectedFile = null;
  this.selectedFileDataUrl = null;
    AllPublications.push(newData)
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
  

