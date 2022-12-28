import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snap.service';

@Component({
  selector: 'app-face-sanp-list',
  templateUrl: './face-sanp-list.component.html',
  styleUrls: ['./face-sanp-list.component.scss']
})
export class FaceSanpListComponent implements OnInit {

  faceSnaps$!: Observable<FaceSnap[]>
  constructor(private faceSnapService: FaceSnapService) { }

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapService.getAllFaceSnap();
  }

}
