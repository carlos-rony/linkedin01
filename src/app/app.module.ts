import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './Home_feed/home/home.component';
import {  RoutingModule } from './app.routing';
import { CorpoComponent } from './Home_feed/corpo/corpo.component';
import { CabecalhoComponent } from './Home_feed/cabecalho/cabecalho.component';
import { BarraDaEsquerdaComponent } from './Home_feed/barra-da-esquerda/barra-da-esquerda.component';
import { OlaUsuarioComponent } from './Home_feed/ola-usuario/ola-usuario.component';
import { BarraDoCentroComponent } from './Home_feed/barra-do-centro/barra-do-centro.component';
import { BarraDaDireitaComponent } from './Home_feed/barra-da-direita/barra-da-direita.component';
import { AtalhoComponent } from './Home_feed/atalho/atalho.component';
import { PromovidoComponent } from './Home_feed/promovido/promovido.component';
import { AnuncioComponent } from './Home_feed/anuncio/anuncio.component';
import { NoticiasComponent } from './Home_feed/noticias/noticias.component';
import { PublicacaoComponent } from './Home_feed/publicacao/publicacao.component';
import { NovoFeedComponent } from './Home_feed/novo-feed/novo-feed.component';
import { Feed1Component } from './Home_feed/feed1/feed1.component';
import { Feed2Component } from './Home_feed/feed2/feed2.component';
import { LinkesComponent } from './Home_feed/linkes/linkes.component';
import { Feed3Component } from './Home_feed/feed3/feed3.component';
import { NovasPublicacoesComponent } from './Home_feed/novas-publicacoes/novas-publicacoes.component';
import { AdicionarPerfisComponent } from './Home_feed/adicionar-perfis/adicionar-perfis.component';
import { CorpoRedeComponent } from './Rede/corpo-rede/corpo-rede.component';
import { MinhaRedeComponent } from './Rede/minha-rede/minha-rede.component';
import { BarraEsquerdaRedeComponent } from './Rede/barra-esquerda-rede/barra-esquerda-rede.component';
import { BarraCentroRedeComponent } from './Rede/barra-centro-rede/barra-centro-rede.component';
import { GerenciarRedeComponent } from './Rede/gerenciar-rede/gerenciar-rede.component';
import { AnuncioRedeComponent } from './Rede/anuncio-rede/anuncio-rede.component';
import { GerenciarConvitesRedeComponent } from './Rede/gerenciar-convites-rede/gerenciar-convites-rede.component';
import { AdicionarContatosRedeComponent } from './Rede/adicionar-contatos-rede/adicionar-contatos-rede.component';
import { ContatosRedeComponent } from './Rede/contatos-rede/contatos-rede.component';
import { EmpresasComponent } from './Rede/empresas/empresas.component';
import { CorpoVagaComponent } from './Vaga/corpo-vaga/corpo-vaga.component';
import { VagaComponent } from './Vaga/vaga/vaga.component';
import { MenuVagaComponent } from './Vaga/menu-vaga/menu-vaga.component';
import { BarraEsquerdaVagaComponent } from './Vaga/barra-esquerda-vaga/barra-esquerda-vaga.component';
import { BarraCentroVagaComponent } from './Vaga/barra-centro-vaga/barra-centro-vaga.component';
import { BarraDireitaVagaComponent } from './Vaga/barra-direita-vaga/barra-direita-vaga.component';
import { PesquisaVagaComponent } from './Vaga/pesquisa-vaga/pesquisa-vaga.component';
import { RecomendacaoVagaComponent } from './Vaga/recomendacao-vaga/recomendacao-vaga.component';
import { MenssagensComponent } from './Menssagens/menssagens/menssagens.component';
import { CorpoMenssagensComponent } from './Menssagens/corpo-menssagens/corpo-menssagens.component';
import { BarraCentroMenssagensComponent } from './Menssagens/barra-centro-menssagens/barra-centro-menssagens.component';
import { BarraDireitaMenssagensComponent } from './Menssagens/barra-direita-menssagens/barra-direita-menssagens.component';
import { ListaMenssagensComponent } from './Menssagens/lista-menssagens/lista-menssagens.component';
import { ConversaMenssagensComponent } from './Menssagens/conversa-menssagens/conversa-menssagens.component';
import { NotificacoesComponent } from './Notificacoes/notificacoes/notificacoes.component';
import { CorpoNotificacoesComponent } from './Notificacoes/corpo-notificacoes/corpo-notificacoes.component';
import { BarraDireitaNotificacaoComponent } from './Notificacoes/barra-direita-notificacao/barra-direita-notificacao.component';
import { BarraCentroNotificacaoComponent } from './Notificacoes/barra-centro-notificacao/barra-centro-notificacao.component';
import { BarraEsquerdaNotificacaoComponent } from './Notificacoes/barra-esquerda-notificacao/barra-esquerda-notificacao.component';
import { SuasNotificacoesComponent } from './Notificacoes/suas-notificacoes/suas-notificacoes.component';
import { MensagensNotificacoesComponent } from './Notificacoes/mensagens-notificacoes/mensagens-notificacoes.component';
import { AnuncioNotificacoesComponent } from './Notificacoes/anuncio-notificacoes/anuncio-notificacoes.component';
import { PremiumComponent } from './Premium/premium/premium.component';
import { CorpoPremiumComponent } from './Premium/corpo-premium/corpo-premium.component';
import { CabecalhoPremiumComponent } from './Premium/cabecalho-premium/cabecalho-premium.component';
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
import { VagasBasePerfilComponent } from './Vaga/vagas-base-perfil/vagas-base-perfil.component';
import { VagaDSComponent } from './Vaga/vaga-ds/vaga-ds.component';
import { NotificacaoSingleComponent } from './Notificacoes/notificacao-single/notificacao-single.component';
import { NoticiasNotificacoesComponent } from './Notificacoes/noticias-notificacoes/noticias-notificacoes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CorpoComponent,
    CabecalhoComponent,
    BarraDaEsquerdaComponent,
    OlaUsuarioComponent,
    BarraDoCentroComponent,
    NoticiasComponent,
    BarraDaDireitaComponent,
    AtalhoComponent,
    PromovidoComponent,
    AnuncioComponent,
    PublicacaoComponent,
    NovoFeedComponent,
    Feed1Component,
    Feed2Component,
    LinkesComponent,
    Feed3Component,
    NovasPublicacoesComponent,
    AdicionarPerfisComponent,
    CorpoRedeComponent,
    MinhaRedeComponent,
    BarraEsquerdaRedeComponent,
    BarraCentroRedeComponent,
    GerenciarRedeComponent,
    AnuncioRedeComponent,
    GerenciarConvitesRedeComponent,
    AdicionarContatosRedeComponent,
    ContatosRedeComponent,
    EmpresasComponent,
    CorpoVagaComponent,
    VagaComponent,
    MenuVagaComponent,
    BarraEsquerdaVagaComponent,
    BarraCentroVagaComponent,
    BarraDireitaVagaComponent,
    PesquisaVagaComponent,
    RecomendacaoVagaComponent,
    MenssagensComponent,
    CorpoMenssagensComponent,
    BarraCentroMenssagensComponent,
    BarraDireitaMenssagensComponent,
    ListaMenssagensComponent,
    ConversaMenssagensComponent,
    NotificacoesComponent,
    CorpoNotificacoesComponent,
    BarraDireitaNotificacaoComponent,
    BarraCentroNotificacaoComponent,
    BarraEsquerdaNotificacaoComponent,
    SuasNotificacoesComponent,
    MensagensNotificacoesComponent,
    AnuncioNotificacoesComponent,
    PremiumComponent,
    CorpoPremiumComponent,
    CabecalhoPremiumComponent,
    EuComponent,
    SolucoesComponent,
    CadastroComponent,
    Cadastro2Component,
    Cadastro3Component,
    Cadastro4Component,
    Cadastro5Component,
    GerenciarContatosRedeComponent,
    GerenciarPessoasRedeComponent,
    GerenciarEventosRedeComponent,
    GerenciarPageRedeComponent,
    GerenciarNewslettersRedeComponent,
    GerenciarHashtagsRedeComponent,
    GerenciarMinhasVagaComponent,
    GerenciarAvalicoesVagaComponent,
    GerenciarConfiguracoesComponent,
    GerenciarAlertaComponent,
    Premium2Component,
    VagaSingleComponent,
    VagasBasePerfilComponent,
    VagaDSComponent,
    NotificacaoSingleComponent,
    NoticiasNotificacoesComponent,
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
