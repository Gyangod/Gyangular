import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Packages } from '../model/packages';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  private host = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public teachPackage(pack: Packages, username: String): Observable<Packages> {
    return this.http.post<Packages>(`${this.host}/pack/teach/${username}`, pack);
  }

  public savePackage(pack: Packages, username: String): Observable<Packages> {
    return this.http.post<Packages>(`${this.host}/pack/save/${username}`, pack);
  }
}
