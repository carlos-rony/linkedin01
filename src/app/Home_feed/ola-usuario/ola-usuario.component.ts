import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-ola-usuario',
  templateUrl: './ola-usuario.component.html',
  styleUrls: ['./ola-usuario.component.css']
})
export class OlaUsuarioComponent implements OnInit {

  nomepessoa="";
  fotopessoa="";
  fundopessoa="";
  idpessoa="";
  cargopessoa="";
  qtdeviuperfil=0;
  qtdevirampublicacao=0;

  constructor( private cookieservice: CookieService ) { }

  ngOnInit(): void {
    this.nomepessoa=this.cookieservice.get('nomepessoa');    
    this.fotopessoa=this.cookieservice.get('fotopessoa');    
    this.fundopessoa=this.cookieservice.get('fundopessoa');    
    this.cargopessoa=this.cookieservice.get('cargopessoa');    
    this.idpessoa=this.cookieservice.get('idpessoa');    
    this.qtdeviuperfil=Number (this.cookieservice.get('qtdeviuperfil'));    
    this.qtdevirampublicacao=Number(this.cookieservice.get('qtdevirampublicacao'));    
  }

}
