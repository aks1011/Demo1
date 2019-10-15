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
import { environment } from 'src/environments/environment';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasklistComponent } from './tasks/tasklist/tasklist.component';
import { TaskService } from './tasks/shared/task.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    TasklistComponent,
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
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
