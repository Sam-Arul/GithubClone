import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  userData;
  userRepo;
  constructor(private httpclient:HttpClient) { }
  getUserDetails(userName):Observable<any>{
    console.log(userName);
    this.userData = this.httpclient.get('https://api.github.com/users/'+userName);
    return this.httpclient.get('https://api.github.com/users/'+userName);
  }

  


}
