import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/global-constants';
import { Lista_noticias } from 'src/app/models/lista_noticias.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient, private cookieservice: CookieService) { }

  listar_noticias(pagina: number): Observable<Lista_noticias[]> {

    let headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
      .append('access-control-allow-origin', '*')
      .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
      .append('Content-Type', 'application/json')
      .append('filterType', 'name');
    const url_noticias = GlobalConstants.servidorUrl + 'listar_noticias';

    let params = new HttpParams()
      .set("pagina", pagina);
    const paramsArray = params.keys().map(x => ({ [x]: params.get(x) }));
    return this.http.get<Lista_noticias[]>(url_noticias, { headers, params });

  }

}
