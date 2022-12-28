import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    private token!: string;

    getToken(): string{
        return this.token
    }

    login(formValue: {username: string,password: string}): void {
        if(formValue.username === 'lm@example.com' && formValue.password==='12345')
            this.token = 'MyFakeToken';
    }
}