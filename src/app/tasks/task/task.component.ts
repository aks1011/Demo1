import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
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
    private service: TaskService) { }

  ngOnInit() {
    this.resetForm();

    this.taskForm = this.fb.group({
      id: [],
      taskId: [''],
      taskTitle: ['', Validators.required],
      taskDesc: ['', Validators.required],
      allocatedTo: ['', Validators.required],
      estimatedTime: ['', Validators.required],
      createdBy: '',
      createdOn: '',
      status: '',
      complexity: ['', Validators.required],
    });
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.taskData = {
      id: null,
      taskId: '',
      taskTitle: '',
      taskDesc: '',
      allocatedTo: '',
      estimatedTime: '',
      createdBy: '',
      createdOn: '',
      status: '',
      complexity: '',
    }
  }

  onSubmitTaskForm(taskForm: NgForm) {
    const data = Object.assign({}, taskForm.value);
    delete data.id;
    data.taskId = this.service.createTaskId();
    data.createdBy = "Alok";
    data.createdOn = new Date().toDateString();
    data.status = "Todo";
    if (taskForm.value.id == null) {
      this.firestore.collection('Tasks').add(data);
      this.toastr.success('Task added successfully', 'Sprint planner');
    } else {
      this.firestore.doc('Tasks/' + taskForm.value.id).update(data);
      this.toastr.info('Task edited successfully', 'Sprint planner');
    }
    this.resetForm(taskForm);
  }
}
