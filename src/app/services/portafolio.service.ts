import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PortafolioService {
url:string="http://localhost:8080/showPerson";
  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get(this.url)
  }
}
