import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  API_URL:string = `${environment.API_URL}Request/`
  headers: HttpHeaders = new HttpHeaders()
  .set('content-type','application/json')
  .set('Access-Control-Allow-Origin', '*')

  constructor(private http: HttpClient) { }

  getRequests(){
    let promise = new Promise((resolve, reject)=>{
      let url = `${this.API_URL}GetRequests`;
      this.http.get(url, {headers: this.headers})
        .toPromise()
        .then(
          (res: any) =>{
            resolve(res);
          },
          msg =>{
            reject(msg)
          }
        );
    })
    return promise;
  }

  
  stopElevator(){
    let promise = new Promise((resolve, reject)=>{
      let url = `${this.API_URL}StopElevator`;
      this.http.post(url, {headers: this.headers})
        .toPromise()
        .then(
          (res: any) =>{
            resolve(res);
          },
          msg=>{
            reject(msg)
          }
        )
    })
    return promise
  }
}
