import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.scss']
})
export class AnimationDemoComponent implements OnInit {

  //tempToolTip: string;
  tooltip="Created on : 12/09/2019 &#13; Estimated time : 12 &#13; Actual time : 6";
  constructor(private _snackBar: MatSnackBar) {

    //this.tempToolTip="Created on : 12/09/2019 &#13; Estimated time : 12 &#13; Actual time : 6";
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    let element = document.getElementById('accordion-border');
    element.className = 'accordion-radius-style-2';
  }

  todo = [
    'Sprint1',
    'Sprint2',
    'Sprint3',
    'Sprint4',
    'Sprint5'
  ];

  inprogress = [];

  done = ['Sprint1', 'Sprint2'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

    if (event.container.id == "cdk-drop-list-1" && event.previousContainer.id == "cdk-drop-list-0") {
      this._snackBar.open('ToDo => InProgress', '', { duration: 2000 });
    }
    if (event.container.id == "cdk-drop-list-2" && event.previousContainer.id == "cdk-drop-list-0") {
      this._snackBar.open('ToDo => Done', '', { duration: 2000 });
    }
    if (event.container.id == "cdk-drop-list-2" && event.previousContainer.id == "cdk-drop-list-1") {
      this._snackBar.open('InProgress => Done', '', { duration: 2000 });
    }

  }

}
