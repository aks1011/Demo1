import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  emailid;
  formdata;
  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl('angular@gmail.com'),
      passwd: new FormControl('abcd1234')
   });
  }

  onClickSubmit(data) {
    this.emailid = data.emailid;
 }
}
