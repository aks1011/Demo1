import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  tasks: Task[];
  todo: Task[];
  inprogress: Task[];
  done: Task[];
  constructor(private service: TaskService) { }

  ngOnInit() {
    this.service.getTasks().subscribe(actionArray => {
      this.tasks = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Task;
      });
      this.divideTasksBasedOnStatus(this.tasks);
    });

  }

  divideTasksBasedOnStatus(task: Task[]) {
    this.todo = [];
    this.inprogress = [];
    this.done = [];
    task.forEach(item => {
      if (item.status.toLowerCase() == "todo") {
        this.todo.push(item);
      }
      if (item.status.toLowerCase() == "inprogress") {
        this.inprogress.push(item);
      }
      if (item.status.toLowerCase() == "done") {
        this.done.push(item);
      }
    });

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
