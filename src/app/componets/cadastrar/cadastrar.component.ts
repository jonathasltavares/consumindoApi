import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  public clientes$: any = []
  constructor(private clientesServices: ClientesService){
    this.getClientes()
  }
  ngOnInit(): void {
    this.getClientes()
    
  }
  getClientes(){
    this.clientesServices.getAll().subscribe((clientes) => (this.clientes$ = clientes))
  }
  cadastrarClientes(){
    let nome = document.getElementById("nomeinput") as HTMLInputElement;
    if(nome.value =="" || nome ==null){
      
    }else{
      let cliente = {
      nome: nome.value
      }
    this.clientesServices.save(cliente).subscribe()
    this.getClientes()
    }
  }
}
