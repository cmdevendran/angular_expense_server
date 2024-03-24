import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseformComponent } from './expenseform/expenseform.component';
import { AppComponent } from './app.component';
import { ExpenselistComponent } from './expenselist/expenselist.component';
const appRoutes: Routes = [
  {path:'', component : ExpenselistComponent},
  { path: 'expense', component: ExpenseformComponent },


  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
