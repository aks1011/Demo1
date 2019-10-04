import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DemoMaterialModule } from './material-module';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { DateServiceService } from './date-service.service';
import { TextChangerDirective } from './text-changer.directive';
import { AnimationDemoComponent } from './animation-demo/animation-demo.component';
import { environment } from 'src/environments/environment';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeelistComponent } from './employees/employeelist/employeelist.component';
import { EmployeeService } from './shared/employee.service';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasklistComponent } from './tasks/tasklist/tasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    Page1Component,
    Page2Component,
    TextChangerDirective,
    AnimationDemoComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeelistComponent,
    TasksComponent,
    TaskComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ToastrModule.forRoot()
  ],
  providers: [DateServiceService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
