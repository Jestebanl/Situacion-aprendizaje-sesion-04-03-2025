import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private endpoint:string="https://fakestoreapiserver.reactbd.com/photos";

  constructor(private http:HttpClient) { }

  public getDatos():Observable<any[]>{
    return this.http.get<any[]>(this.endpoint);
  }
}
