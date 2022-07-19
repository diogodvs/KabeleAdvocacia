import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirconsumidorComponent } from './pages/dirconsumidor/dirconsumidor.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PrevComponent } from './pages/prev/prev.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { DirtrabalhistaComponent } from './pages/dirtrabalhista/dirtrabalhista.component'
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomePageComponent
  },
  {
    path: 'about', component: SobreComponent
  },
  {
    path: 'prev', component: PrevComponent
  },
  {
    path: 'cons', component: DirconsumidorComponent
  },
  {
    path: 'trab', component: DirtrabalhistaComponent
  },
  {
    path: 'contact', component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
