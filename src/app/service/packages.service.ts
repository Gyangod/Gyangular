import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { CustomHttpRespone } from '../model/custom-http-response';
import { Packages } from '../model/packages';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  private host = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public teachPackage(pack: Packages): Observable<CustomHttpRespone> {
    return this.http.post<CustomHttpRespone>(`${this.host}/pack/teach`, pack);
  }

  public savePackage(pack: Packages): Observable<CustomHttpRespone> {
    return this.http.post<CustomHttpRespone>(`${this.host}/pack/save`, pack);
  }

  public addResponseToLocalCache(response: CustomHttpRespone): void {
    localStorage.setItem('response', JSON.stringify(response));
  }

  public deleteResponseFromLocalCache(): void {
    localStorage.removeItem('response');
  }

  public loadResponseFromLocalCache(): CustomHttpRespone {
    return JSON.parse(localStorage.getItem('response'));
  }
}
