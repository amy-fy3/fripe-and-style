import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  nom: string = '';
  email: string = '';
  message: string = '';
  envoye: boolean = false;

  envoyerMessage() {
    if (this.nom && this.email && this.message) {
      this.envoye = true;
      console.log('Message envoyé:',
         { nom: this.nom, email: this.email, message: this.message });
    }
  }
}