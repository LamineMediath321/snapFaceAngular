import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapService } from 'src/app/core/services/face-snap.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapFaceForm!: FormGroup;
  prochainFaceSnap$!: Observable<FaceSnap>;
  urlRegex!: RegExp;

  constructor(
              private formBuilder: FormBuilder,
              private route: Router,
              private faceSnapService: FaceSnapService) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapFaceForm = this.formBuilder.group({
      title: [null,[Validators.required]],
      description: [null,[Validators.required,Validators.minLength(10)]],
      imageUrl: [null,[Validators.required,Validators.pattern(this.urlRegex)]],
      location: [null]
    },
    {updateOn: 'blur'});
    this.prochainFaceSnap$ = this.snapFaceForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: 0
      }))
    );
  }

  onSubmit(): void{
    this.faceSnapService.saveNewFacaSnap(this.snapFaceForm.value).pipe(
      tap(()=> this.route.navigateByUrl('/facesnaps'))
    ).subscribe();
  }

}
