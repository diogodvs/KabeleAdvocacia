import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { NavBarComponent } from './componets/template/nav-bar/nav-bar.component';
import { AboutComponent } from './componets/template/about/about.component';
import { MainHomeComponent } from './componets/template/main-home/main-home.component';
import { CarouselComponent } from './componets/template/carousel/carousel.component';
import { ValuesComponent } from './componets/template/values/values.component';
import { WhyChooseComponent } from './componets/template/why-choose/why-choose.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
=======
import { NavBarComponent } from './componets/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
>>>>>>> 64e9bf7a1f77d3b59d7de61d49e251f62d672b10

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
<<<<<<< HEAD
    AboutComponent,
    MainHomeComponent,
    CarouselComponent,
    ValuesComponent,
    WhyChooseComponent,
    HomeComponent,
    SobreComponent
=======


>>>>>>> 64e9bf7a1f77d3b59d7de61d49e251f62d672b10
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
