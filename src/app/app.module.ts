import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ExpenseformComponent } from './expenseform/expenseform.component';
import { AppRoutingModule } from './app-routing.module';
import { ExpenselistComponent } from './expenselist/expenselist.component';
import { FormsModule } from '@angular/forms';
import { ShowexpenseComponent } from './showexpense/showexpense.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseformComponent,
    ShowexpenseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ExpenselistComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { 
 
}
