import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const { baseURL } = environment;

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<any> {
    return this.httpClient.get(`${baseURL}products/categories`);
  }

  getAllProducts(limit?: number): Observable<any> {
    let params = new HttpParams();
    if (limit) params = params.set('limit', limit);
    return this.httpClient.get(`${baseURL}products`, { params });
  }
}
