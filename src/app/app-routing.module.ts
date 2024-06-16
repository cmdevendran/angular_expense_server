import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseformComponent } from './expenseform/expenseform.component';
import { AppComponent } from './app.component';
import { ExpenselistComponent } from './expenselist/expenselist.component';
import { IndividuallistComponent } from './individuallist/individuallist.component';
import { EditexpenseComponent } from './editexpense/editexpense.component';
const appRoutes: Routes = [
  {path:'', component : ExpenselistComponent},
  { path: 'expense', component: ExpenseformComponent },
  { path: 'showexpense', component: IndividuallistComponent },
  { path: 'editexpense', component: EditexpenseComponent },



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
