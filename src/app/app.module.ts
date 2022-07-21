import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componets/template/nav-bar/nav-bar.component';
import { AboutComponent } from './componets/template/about/about.component';
import { CarouselComponent } from './componets/template/carousel/carousel.component';
import { ValuesComponent } from './componets/template/values/values.component';
import { WhyChooseComponent } from './componets/template/why-choose/why-choose.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { PracticeAreasComponent } from './componets/template/practice-areas/practice-areas.component';
import { PrevComponent } from './pages/prev/prev.component';
import { DirconsumidorComponent } from './pages/dirconsumidor/dirconsumidor.component';
import { DirtrabalhistaComponent } from './pages/dirtrabalhista/dirtrabalhista.component';
import { FooterComponent } from './componets/template/footer/footer.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { WhatsappComponent } from './componets/whatsapp/whatsapp.component';


@NgModule({
  declarations: [
    AppComponent,
    ValuesComponent,
    SobreComponent,
    WhyChooseComponent,
    AboutComponent,
    CarouselComponent,
    NavBarComponent,
    PracticeAreasComponent,
    HomePageComponent,
    PrevComponent,
    DirconsumidorComponent,
    DirtrabalhistaComponent,
    FooterComponent,
    ContatoComponent,
    WhatsappComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
