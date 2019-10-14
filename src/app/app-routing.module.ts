import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AnimationDemoComponent } from './animation-demo/animation-demo.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasklistComponent } from './tasks/tasklist/tasklist.component';

const routes: Routes = [
  { path: '', component: TasklistComponent },
  { path: 'animation', component: AnimationDemoComponent },
  { path: 'addtask', component: TaskComponent },
  { path: 'dashboard', component: TasklistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
