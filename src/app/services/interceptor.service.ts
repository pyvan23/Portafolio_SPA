import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //metodo que intercepta el token y luego sigue su curso
    var currentUser = this.authService.authUser;
    if(currentUser && currentUser.accessToken){
      req=req.clone({
        setHeaders:{
          Authorization:`Bearer ${currentUser.accessToken}`
        }
      })
    }
    console.log('interceptor is running' + JSON.stringify(currentUser));
    return next.handle(req);
  }
}
