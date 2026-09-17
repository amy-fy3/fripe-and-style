import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { VETEMENTS, Vetement } from '../../vetements';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-accueil',
  styleUrl: './accueil.css',
  templateUrl: './accueil.html',
})
export class Accueil {
  vetements: Vetement[] = VETEMENTS;
}