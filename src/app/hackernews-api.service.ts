import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HackernewsApiService {

  baseUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
   }

   fetchStories(): Observable<any> {
     return this.http.get(`${this.baseUrl}/topstories.json`).pipe(
       map(response => response)
     );
   }

   fetchItem(itemID: number): Observable<any> {
     return this.http.get(`${this.baseUrl}/item/${itemID}.json`);
   }
}
