import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';



@NgModule({
  declarations: [
    AboutComponent,
    LandingPageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent,
    LandingPageComponent,
  ]
})
export class StaticPageModule { }
