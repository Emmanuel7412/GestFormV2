import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ModuloResult } from '../models/moduloResult';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NumberService {
  private headers: HttpHeaders;
  serializer: any;
  private url: string;
  private endpoint: string;

  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    this.url = environment.apiUrl;
    this.endpoint = '/TestGestForm/results';
  }

  getResults(list: number[]): Observable<ModuloResult[]> {
    return this.httpClient
      .post<ModuloResult[]>(this.url + this.endpoint, list, {
        headers: this.headers,
      })
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
