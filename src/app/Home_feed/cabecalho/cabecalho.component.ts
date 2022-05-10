import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  fotopessoa="";

  constructor( private cookieservice: CookieService) { }

  ngOnInit(): void {
    this.fotopessoa=this.cookieservice.get('fotopessoa');
  }

}
