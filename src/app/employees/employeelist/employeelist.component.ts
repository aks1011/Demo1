import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

  list: Employee[];
  constructor(private service: EmployeeService, private toastr:ToastrService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Employee
      })
    });
  }

  onEdit(emp: Employee) {
    this.service.formData = Object.assign({},emp);
  }

  onDelete(id){
    this.service.deleteEmployee(id);
    this.toastr.warning('Deleted successfully','Register')
  }
}
