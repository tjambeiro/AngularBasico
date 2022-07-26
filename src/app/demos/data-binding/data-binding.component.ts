import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  public contadorClique: number = 0;
  public urlImagem:  string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome: string ="";

  adicionaClique(){
    this.contadorClique++;
  };
  zeraContador(){
    this.contadorClique = 0;
  }

  blurNome(event: any){
    this.nome = event.target.value;
  }
}
