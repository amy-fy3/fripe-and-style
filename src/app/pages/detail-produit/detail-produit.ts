import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VETEMENTS, Vetement } from '../../vetements';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-detail-produit',
  styleUrl: './detail-produit.css',
  templateUrl: './detail-produit.html',
})
export class DetailProduit {
  vetement: Vetement | undefined;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.vetement = VETEMENTS.find(v => v.id === id);
  }
}
