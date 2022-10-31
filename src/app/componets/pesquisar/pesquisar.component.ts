import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {
  public clientes$: any
  
  constructor(private clientesServices: ClientesService, private http: HttpClient){
  }
  ngOnInit(): void {

  }

  getClientes(){
    this.clientesServices.getAll().subscribe((clientes) => (this.clientes$ = clientes))
  }
  procurarCliente(){
    let inputID = document.getElementById("IDinput") as HTMLInputElement
    let id = inputID.valueAsNumber
    this.clientesServices.getById(id).subscribe(
      resultado => {
        this.clientes$ = resultado
        console.log(this.clientes$)
      },
      erro => {
        if (erro.status == 404) {
          this.clientes$ = "naoencontrado"
        }
      }  
    )
    console.log(this.clientes$)
  }

}
