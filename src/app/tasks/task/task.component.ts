import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private firestore: AngularFirestore, private toastr: ToastrService) { }

  ngOnInit() {
    this.taskForm = this.fb.group({
      taskTitle: ['', [Validators.required]],
      taskDesc: [''],
      allocatedTo: [''],
      estimatedTime: ['']
    });
  }

  onSubmitTaskForm(form) {
    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('Tasks').add(data);
      this.toastr.success('Task added successfully', 'Sprint planner');
    } else {
      this.firestore.doc('Tasks/' + form.value.id).update(data);
      this.toastr.info('Task edited successfully', 'Sprint planner');
    }
    // this.resetForm(form);
  }


  // resetForm(form) {
  //   if (form != null)
  //     form.resetForm();
  //   this.service.formData = {
  //     id: null,
  //     fullName: '',
  //     position: '',
  //     empCode: '',
  //     mobile: '',
  //   }
  // }


}
