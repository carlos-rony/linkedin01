import { Pessoas } from './models/pessoas.model'; 

export class GlobalConstants {

    public static baseUrl: string = "http://localhost:3001/";
    public static siteUrl: string = "http://localhost:4200/";
    public static servidorUrl: string = "http://localhost:8080/api/";

    public static UsuarioLogado: Pessoas = {
        idpessoa: 0 ,
        nomepessoa: "",
        fundopessoa: "",
        fotopessoa: "",
        cargopessoa:"",
        senha: "",
        email: "",
        status: 0 ,
        qtdevirampublicacao:0,
        qtdeviuperfil:0
      }
}