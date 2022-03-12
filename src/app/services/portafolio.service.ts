import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  constructor() { }

  getData(){
    console.log('Data is comming');
  }
}
