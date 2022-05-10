import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-publicacao',
  templateUrl: './publicacao.component.html',
  styleUrls: ['./publicacao.component.css']
})
export class PublicacaoComponent implements OnInit {

  fotopessoa="";

  constructor(private cookieservice:CookieService) { }

  ngOnInit(): void {    
    this.fotopessoa=this.cookieservice.get('fotopessoa');    
  }

}
