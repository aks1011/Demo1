import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskData: Task;

  constructor(private firestore: AngularFirestore) { }

  getTasks() {
    return this.firestore.collection('Tasks').snapshotChanges();
  }

  createTaskId() {
    let dt = new Date().getTime();
    const uuid = 'US-T1-xxyx-yxxx'.replace(/[xy]/g, function (c) {
      let r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  updateTask(item) {
    this.firestore.doc('Tasks/' + item.id).update(item);
  }

  deleteTask(id){
    this.firestore.collection('Tasks').doc(id).delete();
  }
}
