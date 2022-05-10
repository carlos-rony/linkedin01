import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { Login } from '../views/Login';
import { Pessoas } from '../models/pessoas.model';
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { GlobalConstants } from '../global-constants';

@Injectable({
  providedIn: 'root'
})
export class loginService {

  constructor(private http: HttpClient) { }

  validar_login( email: string , senha: string ): Observable<Pessoas> {

    let headers = new HttpHeaders()
     .append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
     .append('access-control-allow-origin', '*')
     .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
     .append('Content-Type', 'application/json')
     .append('filterType', 'name');  

     const url_pessoa=GlobalConstants.servidorUrl + 'validarlogin';
      let params = new HttpParams()
      .set("email",email)
      .set("senha",senha);
      return this.http.get<Pessoas>(url_pessoa, { headers , params } );
   }

  ExibirMensage() {
    alert('perfil gravado com sucesso !!!');
  }

  errorHandler(e: any): Observable<any> {
    alert(e.errorHandler);
    return EMPTY;
  }

}
