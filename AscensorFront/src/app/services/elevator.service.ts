import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElevatorService {
  API_URL:string = `${environment.API_URL}Elevator/`
  headers: HttpHeaders = new HttpHeaders()
  .set('content-type','application/json')
  .set('Access-Control-Allow-Origin', '*')

  constructor(private http: HttpClient) { }
  

  getElevator(){
    let promise = new Promise((resolve, reject)=>{
      let url = `${this.API_URL}GetCurrentFloor`;
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

  setRequest(request: any){
    let promise = new Promise((resolve, reject)=>{
      let url = `${this.API_URL}AddRequestToGo`;
      this.http.post(url, request, {headers: this.headers})
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
