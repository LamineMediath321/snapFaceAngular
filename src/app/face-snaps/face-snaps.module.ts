import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSanpListComponent } from './components/face-sanp-list/face-sanp-list.component';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { FaceSnapRoutingModule } from './face-snap-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FaceSanpListComponent,
    FaceSnapComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent,
    
  ],
  imports: [
    CommonModule,
    FaceSnapRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    FaceSanpListComponent,
    FaceSnapComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponent
  ]
})
export class FaceSnapsModule { }
