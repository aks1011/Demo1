import { Component, OnInit } from '@angular/core';
import { DateServiceService } from './date-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Demo1';
  currentDateAndTime: any;

  constructor(private dateService: DateServiceService){
  }

  ngOnInit() {
    this.currentDateAndTime = this.dateService.showCurrentDate();
  }

}
