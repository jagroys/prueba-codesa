import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';
import { UserFormComponentComponent } from './user-form-component/user-form-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserLoginComponentComponent } from './user-login-component/user-login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponentComponent,
    UserFormComponentComponent,
    UserLoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
