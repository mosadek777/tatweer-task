import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowTodosComponent } from './components/show-todos/show-todos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './core/shared/shared.module';
import { FilterPipe } from './core/pipe/filter.pipe';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DateFilterPipe } from './core/pipe/date-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    NavbarComponent,
    ShowTodosComponent,
    NotFoundComponent,
    FilterPipe,
    DateFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
