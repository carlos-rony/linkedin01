import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { loginService } from '../Login/login.service';
import { Pessoas } from '../models/pessoas.model';
import { ActivatedRoute, Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  xpessoa: Pessoas | undefined;
  cookieValue:string | undefined;

  constructor(
    private loginservice: loginService,
    private router: Router,
    private cookieService:CookieService) { }

  TXT_EMAIL: string = "sanches@gmail.com";
  TXT_SENHA: string = "123456";

  ngOnInit(): void {
    this.cookieService.delete('idpessoa');
    this.cookieService.delete('fotopessoa');
    this.cookieService.delete('nomepessoa');
    this.cookieService.delete('fundopessoa');
    this.cookieService.delete('cargopessoa');
   this.cookieService.delete('qtdeviuperfil');
   this.cookieService.delete('qtdevirampublicacao');
  }

  validarlogin() {
    this.loginservice.validar_login(this.TXT_EMAIL, this.TXT_SENHA).subscribe((pessoa: Pessoas) => {

      if(!pessoa) // if a is negative,undefined,null,empty value then...
      {
          alert('Email ou senha incorreto');
      }
      else {
        this.xpessoa = pessoa;
        this.cookieService.set('idpessoa',""+pessoa.idpessoa);
        this.cookieService.set('fotopessoa',""+pessoa.fotopessoa);
        this.cookieService.set('nomepessoa',""+pessoa.nomepessoa);
        this.cookieService.set('fundopessoa',""+pessoa.fundopessoa);
        this.cookieService.set('cargopessoa',""+pessoa.cargopessoa);

        this.cookieService.set('qtdeviuperfil',""+pessoa.qtdeviuperfil);
        this.cookieService.set('qtdevirampublicacao',""+pessoa.qtdevirampublicacao);

        this.router.navigate(['/Home']);
          }


    })
  }
}
