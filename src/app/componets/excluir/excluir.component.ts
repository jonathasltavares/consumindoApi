import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {
  public clientes$: any = []
  public excluido:boolean = false
  constructor(private clientesServices: ClientesService){
    this.getClientes()
  }
  ngOnInit(): void {
    this.getClientes()
  }
  getClientes(){
    this.clientesServices.getAll().subscribe((clientes) => (this.clientes$ = clientes))
  }
  excluirCliente(){
    let inputID = document.getElementById("IDinput") as HTMLInputElement
    let id = inputID.valueAsNumber
    this.clientesServices.deleteById(id).subscribe(() => {
      this.getClientes();
      this.excluido = true
    });
  }

}
