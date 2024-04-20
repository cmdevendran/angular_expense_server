import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {  NgFor } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {Location} from '@angular/common';


@Component({
  selector: 'app-individuallist',
  standalone:true,

  imports: [NgFor,  MatCardModule, MatDividerModule, MatButtonModule,MatIconModule],
  templateUrl: './individuallist.component.html',
  styleUrls: ['./individuallist.component.css']
})
export class IndividuallistComponent {
   obj : any;
   expenses : any;
  constructor(private router : Router, private location : Location){
  //  console.log(this.router.getCurrentNavigation()?.extras.state.example); 
    this.obj = this.router.getCurrentNavigation()?.extras.state// should log out 'bar'
    this.expenses = this.obj.obj3
    console.log(this.expenses);
  }
  ngOnInit(): void {
    
  }
  backClicked() {
    this.location.back();
  }

  editExpense(exp:any){
    console.log("get item of exp cat" + exp)

    this.router.navigate(['/editexpense'],{state:{exp}})
  }

  deleteExpense(exp:any){
    console.log("delete Expense" + exp)

   
  }


}
