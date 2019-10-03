import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DateServiceService } from '../date-service.service';
import { Hisaab } from '../hisaab';
import { FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface Friend {
  name: string;
}

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})

export class Page2Component implements OnInit {

  firstNameAutofilled: boolean;
  lastNameAutofilled: boolean;

  hisaabList: Array<Hisaab>;
  httpResponseData: any;
  toppings;
  toppingList;
  friendList = [];
  selected = "You";
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 4, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 4, color: 'lightgreen' },
  ];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.friendList.push(value);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(friend: Friend): void {
    const index = this.friendList.indexOf(friend);

    if (index >= 0) {
      this.friendList.splice(index, 1);
    }
  }

  constructor(private http: HttpClient, private dataService: DateServiceService) {
    this.toppings = new FormControl();
    // this.toppingList = ['Aditi', 'Sanket', 'Ritika', 'Polo', 'Manish', 'Anjali'];

  }

  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users").
      subscribe((data) => this.displayData(data));
    this.hisaabData();
  }

  displayData(data) {
    this.httpResponseData = data;
  }

  hisaabData() {
    this.hisaabList = this.dataService.hisaabData();
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
}
