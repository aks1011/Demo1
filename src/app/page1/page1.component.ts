import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  alokForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.alokForm = this.fb.group({

      name: ['', Validators.required],
      age: ['', Validators.compose([Validators.required, Validators.min(16), Validators.max(65)])],
      mobile: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]{10}$')])]

    });

  }

  onClickSubmit() {
    console.log(this.alokForm.value);
  }

  get name() { return this.alokForm.get('name'); }
  get age() { return this.alokForm.get('age'); }
  get mobile() { return this.alokForm.get('mobile'); }
}
