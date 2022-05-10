import {  RouterModule, Routes } from "@angular/router";
//import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './Home_feed/home/home.component';
import { MinhaRedeComponent } from './Rede/minha-rede/minha-rede.component';
import { VagaComponent } from './Vaga/vaga/vaga.component';
import { MenssagensComponent } from "./Menssagens/menssagens/menssagens.component";
import { NotificacoesComponent } from "./Notificacoes/notificacoes/notificacoes.component";
import { PremiumComponent } from './Premium/premium/premium.component';
import { EuComponent } from './Home_feed/eu/eu.component';
import { SolucoesComponent } from './Home_feed/solucoes/solucoes.component';
import { CadastroComponent } from './Login/Cadastro/cadastro/cadastro.component';
import { Cadastro2Component } from './Login/Cadastro/cadastro2/cadastro2.component';
import { Cadastro3Component } from './Login/Cadastro/cadastro3/cadastro3.component';
import { Cadastro4Component } from './Login/Cadastro/cadastro4/cadastro4.component';
import { Cadastro5Component } from './Login/Cadastro/cadastro5/cadastro5.component';
import { GerenciarContatosRedeComponent } from './Rede/gerenciar-contatos-rede/gerenciar-contatos-rede.component';
import { GerenciarPessoasRedeComponent } from './Rede/gerenciar-pessoas-rede/gerenciar-pessoas-rede.component';
import { GerenciarEventosRedeComponent } from './Rede/gerenciar-eventos-rede/gerenciar-eventos-rede.component';
import { GerenciarPageRedeComponent } from './Rede/gerenciar-page-rede/gerenciar-page-rede.component';
import { GerenciarNewslettersRedeComponent } from './Rede/gerenciar-newsletters-rede/gerenciar-newsletters-rede.component';
import { GerenciarHashtagsRedeComponent } from './Rede/gerenciar-hashtags-rede/gerenciar-hashtags-rede.component';
import { GerenciarMinhasVagaComponent } from './Vaga/gerenciar-minhas-vaga/gerenciar-minhas-vaga.component';
import { GerenciarAvalicoesVagaComponent } from './Vaga/gerenciar-avalicoes-vaga/gerenciar-avalicoes-vaga.component';
import { GerenciarConfiguracoesComponent } from './Vaga/gerenciar-configuracoes/gerenciar-configuracoes.component';
import { GerenciarAlertaComponent } from './Vaga/gerenciar-alerta/gerenciar-alerta.component';
import { Premium2Component } from './Premium/premium2/premium2.component';
import { VagaSingleComponent } from './Vaga/vaga-single/vaga-single.component';
import { NotificacaoSingleComponent } from './Notificacoes/notificacao-single/notificacao-single.component';
import { NoticiasNotificacoesComponent } from './Notificacoes/noticias-notificacoes/noticias-notificacoes.component';















const route: Routes = [
    {path: '', component:LoginComponent },
    {path: 'Home', component:HomeComponent },
    {path: 'Minha_Rede', component:MinhaRedeComponent},
    {path: 'Vaga', component:VagaComponent },
    {path: 'Menssagens', component:MenssagensComponent },
    {path: 'Notificacoes', component: NotificacoesComponent },
    {path: 'Experimente-Premium', component: PremiumComponent },
    {path: 'Eu', component: EuComponent  },
    {path: 'Soluções', component:  SolucoesComponent },
    {path: 'Cadastre-se', component:  CadastroComponent},
    {path: 'Dados1', component:  Cadastro2Component},
    {path: 'Dados2', component: Cadastro3Component},
    {path: 'Dados3', component: Cadastro4Component},
    {path: 'Dados4', component: Cadastro5Component},
    {path: 'Contatos-Rede', component: GerenciarContatosRedeComponent},
    {path: 'Pessoas-Rede', component: GerenciarPessoasRedeComponent},
    {path: 'Eventos-Rede', component: GerenciarEventosRedeComponent},
    {path: 'Pages-Rede', component: GerenciarPageRedeComponent},
    {path: 'Newsletters-Rede', component: GerenciarNewslettersRedeComponent },
    {path: 'Hashtags-Rede', component: GerenciarHashtagsRedeComponent},
    {path: 'Minhas-Vagas', component: GerenciarMinhasVagaComponent},
    {path: 'Avalições-Vaga', component: GerenciarAvalicoesVagaComponent},
    {path: 'Configurações-Vaga', component:GerenciarConfiguracoesComponent},
    {path: 'Alerta-Vaga', component:GerenciarAlertaComponent},
    {path: 'Premium2', component:Premium2Component},
    {path: 'Vaga-Trabalho', component:VagaSingleComponent},
    {path: 'Notificacao-Single', component:NotificacaoSingleComponent},
    {path: 'Noticias-Notificações', component:NoticiasNotificacoesComponent}

];
export const RoutingModule = RouterModule.forRoot(route);