import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos/produto';
import { ProdutoService } from '../produtos/produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: "./lista-produtos.component.html",
  styleUrls: ["./lista-produtos.component.css"]
})
export class ListaProdutosComponent implements OnInit {

  constructor(private ProdutoService: ProdutoService) { }

  public produtos: Produto[] = [];

  ngOnInit(): void {
    this.ProdutoService.obterProdutos()
    .subscribe(
      produtos => {
        this.produtos = produtos
      },
      error =>{
        console.log(error)
      }
    );
  }

}
