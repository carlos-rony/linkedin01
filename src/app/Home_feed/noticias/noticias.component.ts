import { Component, OnInit } from '@angular/core';
import { Lista_noticias } from 'src/app/models/lista_noticias.model';
import {NoticiasService} from './noticias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias?:Lista_noticias[];
  pagina=0;

  constructor(private noticiasService:NoticiasService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.noticiasService.listar_noticias(this.pagina).subscribe((noticias?:Lista_noticias[])=>{
      this.noticias=noticias;
    })
    
  }

}
