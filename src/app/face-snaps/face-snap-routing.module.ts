import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../core/guards/auth.guard";
import { FaceSanpListComponent } from "./components/face-sanp-list/face-sanp-list.component";
import { NewFaceSnapComponent } from "./components/new-face-snap/new-face-snap.component";
import { SingleFaceSnapComponent } from "./components/single-face-snap/single-face-snap.component";


const routes: Routes = [
    {path: '', component: FaceSanpListComponent, canActivate: [AuthGuard]},
    {path: 'create', component: NewFaceSnapComponent, canActivate: [AuthGuard] },
    {path: ':id', component: SingleFaceSnapComponent, canActivate: [AuthGuard]},
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class FaceSnapRoutingModule{

}