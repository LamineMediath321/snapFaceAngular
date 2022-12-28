import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onViewSingle(): void {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }

}
