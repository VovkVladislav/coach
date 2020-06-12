import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegistration } from '../page/sign-up/user-registration.component';

@Injectable()
export class Registration{

    constructor(private http: HttpClient){  
    }

    public regUser(user: UserRegistration){ 
        const userParams = {username: user.username, email: user.email,  password: user.password}
        console.log(userParams)
        const headers = {"content-type": "application/json", "Access-Control-Allow-Origin": "*"}

        return this.http.post("http://localhost:8080/registration", userParams, {headers}).subscribe()
    }

    

}