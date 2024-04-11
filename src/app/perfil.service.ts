import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PerfilService {
  private profile: any;

  constructor() { }

  setProfile(profile: any): void {
    this.profile = profile;
  }
  getProfile(): any {
    return this.profile;
  }
}
