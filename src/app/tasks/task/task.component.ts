import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  taskForm: FormGroup;

  constructor(private fb: FormBuilder,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private service: TaskService) {

    this.taskForm = fb.group({
      id: [''],
      taskId: [''],
      taskTitle: ['Alok', Validators.required, Validators.minLength(5)],
      taskDesc: ['', Validators.required],
      allocatedTo: ['', Validators.required],
      estimatedTime: ['', Validators.required],
      createdBy: '',
      createdOn: '',
      status: '',
      complexity: ['', Validators.required],
    });
  }

  ngOnInit() {
    //this.resetForm(this.taskForm);
  }

  resetForm(form) {
    if (form != null) {
      this.resetForm(this.resetForm);
    }
    this.service.taskData = {
      id: '',
      taskId: '',
      taskTitle: '',
      taskDesc: '',
      allocatedTo: '',
      estimatedTime: '',
      createdBy: '',
      createdOn: '',
      status: '',
      complexity: '',
    };
  }

  onSubmitTaskForm() {
    const data = Object.assign({}, this.taskForm.value);
    delete data.id;
    data.taskId = this.service.createTaskId();
    data.createdBy = 'Alok';
    data.createdOn = new Date().toDateString();
    data.status = 'Todo';
    if (this.taskForm.value.id == null) {
      this.firestore.collection('Tasks').add(data);
      this.toastr.success('Task added successfully', 'Sprint planner');
    } else {
      this.firestore.doc('Tasks/' + this.taskForm.value.id).update(data);
      this.toastr.info('Task edited successfully', 'Sprint planner');
    }
    this.resetForm(this.taskForm);
  }
}
