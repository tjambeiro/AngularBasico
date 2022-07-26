import { Routes } from "@angular/router";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { ListaProdutosComponent } from "./lista-produtos/lista-produtos.component";
import { HomeComponent } from "./navegacao/home/home.component";


export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'featureDataBinding', component: DataBindingComponent},
    {path: 'produtos', component: ListaProdutosComponent},
    //Criar tela de detalhe de produtos
    {path: 'produtos-detalhe/:id', component: ListaProdutosComponent},
];