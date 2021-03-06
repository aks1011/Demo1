import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from '../shared/task.model';
import { TaskService } from '../shared/task.service';
import { fade } from '../shared/animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
  animations: [fade]
})
export class TasklistComponent implements OnInit {

  tasks: Task[];
  todo: Task[];
  inprogress: Task[];
  done: Task[];
  constructor(private service: TaskService, private toastr:ToastrService) { }

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
      if (item.status.toLowerCase() === 'todo') {
        this.todo.push(item);
      }
      if (item.status.toLowerCase() === 'inprogress') {
        this.inprogress.push(item);
      }
      if (item.status.toLowerCase() === 'done') {
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

      const itemMoved = event.container.data[event.currentIndex] as unknown as Task;
      if (event.container.id === 'todo') {
        itemMoved.status = 'todo';
      }
      if (event.container.id === 'inprogress') {
        itemMoved.status = 'inprogress';
      }
      if (event.container.id === 'done') {
        itemMoved.status = 'done';
      }
      this.service.updateTask(itemMoved);
    }
  }

  deleteTask(id){
    this.service.deleteTask(id);
    this.toastr.error('Task deleted successfully', 'Sprint planner');

  }
}
