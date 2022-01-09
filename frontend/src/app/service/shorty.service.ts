import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ShortyService {

  constructor(private http: HttpClient) { }

  getShortenedUrl(longUrl:string): Observable<any> {
    return this.http.post<any>(`${environment.backendHost}creator/url`, {longurl:longUrl})
  }
}
