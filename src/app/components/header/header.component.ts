import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  myPorfolio: any;
  constructor(private data: PortafolioService) {}

  ngOnInit(): void {
    this.data.getData().subscribe((data) => {
      console.log("datos personales " + JSON.stringify(data) );
      this.myPorfolio = data;
    });
  }
}
