import { Component } from '@angular/core';
import { Service } from '../app/Service/AppService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoAngular';
  tokenUsser: string = "";

  constructor(public AppService: Service) {
  }


  ngOnInit() {

    this.GerarToken();

    this.Cadastrar();

    this.GerarToken();

  }

  GerarToken() {
    this.AppService.GerarToken().toPromise().then((res) => {
      debugger
      this.tokenUsser = res;
    })
  }

  ListarProdutos() {
    setTimeout(() => {
      this.Listar();
    }, 5000);
  }

Cadastrar()
{
  setTimeout(() => {
    this.CadastrarProdutos();
  }, 5000);
  
}


  Listar() {
    this.AppService.ListaProdutos(this.tokenUsser)
      .toPromise()
      .then((produtos) => {
        debugger
        var listaTeste = produtos;
        debugger
      })
      .catch((err) => {

        debugger
        var erros = err;
      });
  }

  CadastrarProdutos() {
    debugger
    var produto =
    {
      Id: 0,
      Nome: "Teste",
      Imagem: ""
    };
    debugger
    this.AppService.InsereProduto(produto, this.tokenUsser)
      .toPromise()
      .then((okk) => {
        debugger
        var ok = okk;
      })
      .catch((err) => {
        debugger
        var erros = err;
      });

  }

}
