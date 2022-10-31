import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ClientesService } from './services/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public clientes$: any = []
  public funcoes: string = 'cadastrar'

  constructor(private clientesServices: ClientesService){

  }
  ngOnInit(): void {
  }

}
