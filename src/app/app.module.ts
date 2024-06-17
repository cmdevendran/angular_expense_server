import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ExpenseformComponent } from './expenseform/expenseform.component';
import { AppRoutingModule } from './app-routing.module';
import { ExpenselistComponent } from './expenselist/expenselist.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditexpenseComponent } from './editexpense/editexpense.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseformComponent,
    EditexpenseComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule, 
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { 
 
}
