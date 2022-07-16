import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "../../aboutPage/about/about.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { ValuesComponent } from "../../aboutPage/values/values.component";
import { MainHomeComponent } from "./main-home.component";

@NgModule({
  declarations: [
    MainHomeComponent,
    AboutComponent,
    ValuesComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'home', component: MainHomeComponent
      },
      {
        path: 'about', component: AboutComponent
      }
    ])

  ]
})

export class HomeModule{}
