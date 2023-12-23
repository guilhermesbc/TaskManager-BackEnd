import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskmgrComponent } from './taskmgr/taskmgr.component';
import { ShowTaskmgrComponent } from './taskmgr/show-taskmgr/show-taskmgr.component';
import { AddEditTaskmgrComponent } from './taskmgr/add-edit-taskmgr/add-edit-taskmgr.component';
import { TaskmgrApiService } from './taskmgr-api.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskmgrComponent,
    ShowTaskmgrComponent,
    AddEditTaskmgrComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [TaskmgrApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
