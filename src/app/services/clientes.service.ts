import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = "http://localhost:8080/clientes"
  constructor(private http:HttpClient) { }
  
  getAll(){
    return this.http.get<any>(this.apiUrl)
  }

  save(cliente: object){
    return this.http.post<Object>(this.apiUrl, cliente);
  }

  getById(id: number){
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  deleteById(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
