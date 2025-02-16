import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {  NgFor } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {Location} from '@angular/common';
import {nodeserver} from '../../env';

import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';




@Component({
    selector: 'app-individuallist',
    imports: [NgFor, MatCardModule, MatDividerModule, MatButtonModule, MatIconModule],
    templateUrl: './individuallist.component.html',
    styleUrls: ['./individuallist.component.css']
})
export class IndividuallistComponent {
  httpClient = inject(HttpClient)
   obj : any;
   expenses : any;
  constructor(private router : Router, private http : HttpClient,private location : Location){
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

  async deleteExpense(exp:any){
    console.log("delete Expense" + exp)
    this.http.post(nodeserver+'/expense/deleteexp/',JSON.stringify(exp),{ headers: new HttpHeaders({ 
      'session': '5a4c50b645e2964054e516c8',
      'Access-Control-Allow-Origin':'*',
      'Content-Type':  'application/json',
       }) })
      .subscribe(data => {
        console.log("data"+data)
        
  
  
        });

   
  }


}
