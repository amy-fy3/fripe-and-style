import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { DetailProduit } from './pages/detail-produit/detail-produit';
import { APropos } from './pages/a-propos/a-propos';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'produit/:id', component: DetailProduit },
  { path: 'a-propos', component: APropos },
  { path: 'contact', component: Contact },
];