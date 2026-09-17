import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  prenom: string = '';
  nom: string = '';
  telephone: string = '';
  email: string = '';
  message: string = '';
  envoye: boolean = false;

  envoyerMessage() {
    if (this.prenom && this.nom && this.email && this.message) {
      this.envoye = true;
      console.log('Message envoyé:', {
        prenom: this.prenom,
        nom: this.nom,
        telephone: this.telephone,
        email: this.email,
        message: this.message
      });
    }
  }
}