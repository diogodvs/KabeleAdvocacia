import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './componets/template/nav-bar/nav-bar.component';
import { AboutComponent } from './componets/template/about/about.component';
import { MainHomeComponent } from './componets/template/main-home/main-home.component';
import { CarouselComponent } from './componets/template/carousel/carousel.component';
import { ValuesComponent } from './componets/template/values/values.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    MainHomeComponent,
    CarouselComponent,
    ValuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
