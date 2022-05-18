import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'; //javascript async basado en observables
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:4200';
  currentUserSubject: BehaviorSubject<any>; //guarda los estados
  constructor(private http: HttpClient) {
    console.log('service is running');
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }
  /*metodo que llama a la api,es Obsrebables para que los controladores puedan suscribirse
  vamos a almacenar en el objeto storage que posee dos propiedades el local storage
  (guarda los datos hasta que sean eliminados) y el session storage(guarda los datos
     hasta que la pestaña sea cerrada)*/

  logIn(credentials: any): Observable<any> {
    return this.http.post(this.url, credentials).pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data)
        return data;
      })
    );
  }
get authUser(){
  return this.currentUserSubject.value;
}

}
