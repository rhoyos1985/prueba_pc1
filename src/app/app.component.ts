import { Component, OnInit } from '@angular/core';

import { PruebaService } from './app/services/prueba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'prueba';
  showInfo = undefined;

  constructor(private pruebaService: PruebaService) {};

  ngOnInit(): void {
    this.pruebaService.callApi().subscribe(
        (result) => {
          this.showInfo = result[0];
          
          console.log(this.showInfo);
        }
    );
  }
}
