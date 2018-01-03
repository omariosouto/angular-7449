import { RouterModule, Routes } from '@angular/router'
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { Page404Component } from './page404/page404.component';

// (4.6) pagina 36 37
const rotasApp: Routes = [
  { path: 'cadastro/:id', component: CadastroComponent, pathMatch: 'full' }, // URL DE PAGES
  { path: 'cadastro', component: CadastroComponent, pathMatch: 'full' }, // URL DE PAGES
  { path: '', component: ListagemComponent, pathMatch: 'full' }, // URL BASE
  //{ path: '**', redirectTo: ''  } // PÁGINA 404
  { path: '**', component: Page404Component  } // PÁGINA 404

]

export const roteamento = RouterModule.forRoot(rotasApp)
