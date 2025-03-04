import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private endpoint:string="https://fakestoreapiserver.reactbd.com/posts";

  constructor(private http:HttpClient) { }

  public getDatos():Observable<any[]>{
    return this.http.get<any[]>(this.endpoint).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Error fetching data from the server'));
      })
    );
  }
}
