import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from '../shared/task.service';
import { slidein } from '../shared/animations';
import { Task } from '../shared/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  animations: [slidein]
})
export class TaskComponent implements OnInit {

  taskForm: FormGroup;
  showTaskInfoSlider: boolean;
  addedTask: Task;
  constructor(private fb: FormBuilder,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private service: TaskService) {

    this.taskForm = fb.group({
      id: [null],
      taskId: [''],
      taskTitle: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      taskDesc: ['', Validators.compose([Validators.required, Validators.minLength(25)])],
      allocatedTo: ['', Validators.required],
      estimatedTime: ['', Validators.compose([Validators.required, Validators.min(1)])],
      createdBy: '',
      createdOn: '',
      status: '',
      complexity: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.resetForm(this.taskForm);
  }

  resetForm(form) {
    if (form.id != null) {
      this.resetForm(this.taskForm);
    }
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
    };

    this.taskForm.reset();
  }

  onSubmitTaskForm() {
    const data = Object.assign({}, this.taskForm.value);
    delete data.id;
    data.taskId = this.service.createTaskId();
    data.createdBy = 'Alok Sharna';
    data.createdOn = new Date().toDateString();
    data.status = 'Todo';
    this.addedTask = new Task();
    if (this.taskForm.value.id == null) {
      this.firestore.collection('Tasks').add(data);
      this.toastr.success('Task added successfully', 'Sprint planner');
      this.addedTask = data;
      this.showTaskInfoSlider = true;
      setTimeout(() => { this.showTaskInfoSlider = false; }, 10000);
    } else {
      this.firestore.doc('Tasks/' + this.taskForm.value.id).update(data);
      this.toastr.info('Task edited successfully', 'Sprint planner');
    }
    this.resetForm(this.taskForm);
  }

  closeTaskInfoSlider() {
    this.showTaskInfoSlider = false;
  }
  get id() { return this.taskForm.get('id'); }
  get taskId() { return this.taskForm.get('taskId'); }
  get taskTitle() { return this.taskForm.get('taskTitle'); }
  get taskDesc() { return this.taskForm.get('taskDesc'); }
  get allocatedTo() { return this.taskForm.get('allocatedTo'); }
  get estimatedTime() { return this.taskForm.get('estimatedTime'); }
  get complexity() { return this.taskForm.get('complexity'); }

}
