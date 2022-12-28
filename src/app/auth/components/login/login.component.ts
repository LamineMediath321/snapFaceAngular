import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonSnap } from 'src/app/core/models/person-snap.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  person$!: Observable<PersonSnap>;

  constructor(
      private authService: AuthService, 
      private router: Router,
      private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null,[Validators.required,Validators.email]],
      password: [null,[Validators.required,Validators.minLength(5)]]
    });

    this.person$ = this.loginForm.valueChanges;

  }

  onLogin(): void{
    this.authService.login(this.loginForm.value);
    // console.log(this.loginForm.value);
    this.router.navigateByUrl('/facesnaps');
  }

}
