import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  tasks: Task[];

  constructor(private service:TaskService) { }

  ngOnInit() {
    this.service.getTasks().subscribe(actionArray => {
      this.tasks = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Task;
      });
    });
  }

}
