import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskData: Task;

  constructor(private firestore:AngularFirestore) { }

  getTasks(){
    return this.firestore.collection('Tasks').snapshotChanges();
  }

  createTaskId() {
    var dt = new Date().getTime();
    var uuid = 'US-T0-xxyx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

}
