import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  constructor(private firestore:AngularFirestore) { }

  getEmployees(){
    return this.firestore.collection('Sprints').snapshotChanges();
  }

  deleteEmployee(id){
    this.firestore.collection('Sprints').doc(id).delete();
  }
}
