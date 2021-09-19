import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpEvent,HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { CustomHttpRespone } from '../model/custom-http-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //todo: fix with backend

  public getUsers(param: HttpParams): Observable<User[] | HttpErrorResponse> {
    return this.http.get<User[]>(`${this.host}/user/get/all`,{params: param});
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.host}/user/register`, user);
  }

  public updateUser(user: User,username: String): Observable<User> {
    return this.http.post<User>(`${this.host}/user/update/${username}`, user);
  }

  public resetPassword(user: User): Observable<CustomHttpRespone> {
    return this.http.post<CustomHttpRespone>(`${this.host}/user/reset/password`,user);
  }

  public changePassword(user: User, oldPassword: string): Observable<User> {
    return this.http.post<User>(`${this.host}/user/change/password/${oldPassword}`,user);
  }

  public saveProfileImage(formData: FormData,username: String): Observable<HttpEvent<User>> {
    return this.http.post<User>(`${this.host}/user/save/picture/${username}`, formData,
    {reportProgress: true,
      observe: 'events'
    });
  }

  public deleteUser(userId: string): Observable<CustomHttpRespone> {
    return this.http.delete<CustomHttpRespone>(`${this.host}/user/delete/${userId}`);
  } 

  public changeUserStatus(username: string, change: string): Observable<User> {
    return this.http.get<User>(`${this.host}/user/change/status/${username}/and/${change}`);
  }

  public addUsersToLocalCache(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users));
  }

  public getUsersFromLocalCache(): User[] {
    if (localStorage.getItem('users')) {
        return JSON.parse(localStorage.getItem('users'));
    }
    return null;
  }

  public createUserFormDate(loggedInUsername: string, profileImage: File): FormData {
    const formData = new FormData();
    formData.append('userName', loggedInUsername);
    formData.append('picture', profileImage);
    return formData;
  }

  public getAllParameters(pageNo: number, size: number, sortBy: string, asc: boolean): HttpParams {
    let params: HttpParams = new HttpParams();
    params.set("page",pageNo);
    params.set("size",size);
    (sortBy == '' || sortBy == null)? params.set("sort",size): params.set("sort",null);
    (sortBy == '' || sortBy == null)?  params.set("asc",asc): params.set("asc",null);
    return params;
  }
}
