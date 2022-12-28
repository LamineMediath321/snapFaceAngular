import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buttonText = 'Oh snap';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap(faceSnapId:number): void{
    if(this.buttonText ==='Oh snap'){
      this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId,'snap').pipe(
        tap(() => this.buttonText = 'Oops, unsnap')
      ) 
    }
    else{
       this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId,'unsnap').pipe(
        tap(() => this.buttonText = 'Oh snap')
      ) 
    }
  }

}
