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

      name:['',Validators.required],
      age:['',[Validators.minLength(1), Validators.maxLength(2)]],
      mobile:['',[Validators.minLength(10), Validators.maxLength(10)]]

    });

  }

  onClickSubmit() {
    console.log(this.alokForm.value);
  }
}
