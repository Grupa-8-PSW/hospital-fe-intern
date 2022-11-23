import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Credentials } from '../model/credentials-model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiHost: string = 'http://localhost:5174/';
  headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  userClaims: any = null;
  private loginSource = new BehaviorSubject<boolean>(false);
  public loginObserver = this.loginSource.asObservable();

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { 
    this.userClaims = this.jwtHelper.decodeToken();
    if(this.userClaims)
      this.loginSource.next(true);
  }

  login(loginRequest: Credentials): Observable<boolean> {
    return this.http.post<any>(this.apiHost + 'api/auth/login', loginRequest, { headers: this.headers}).pipe(
      map((res) => {
        localStorage.setItem('token', res.jwt);
        this.userClaims = this.jwtHelper.decodeToken();
        this.loginSource.next(true);
        return true;
      })
    );
  }

  logout(): void {
    localStorage.clear();
    this.userClaims = null;
    this.loginSource.next(false);
  }

  getUserRole(): string {
    if (!this.userClaims)
      return '';
    return this.userClaims.role;
  }

  isLogged(): boolean {
    if (!this.jwtHelper.tokenGetter())
      return false;
    return true;
  }

}
