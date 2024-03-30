import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';





@Component({
  selector: 'app-expenselist',
  standalone:true,

  imports: [NgFor, MatProgressBarModule, MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule],
   templateUrl: './expenselist.component.html',
  styleUrls: ['./expenselist.component.css']
})
export class ExpenselistComponent implements OnInit {

  httpClient = inject(HttpClient)
  expenses : any;
  categories :any []= [];
  selected = 'option2';
  category!: string;
  amount : number = 0;
  total : number = 0;
  obj2 : any[] = [];

 
  constructor(private http : HttpClient){

  }
  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(){
    this.http.get('http://localhost:8080/expense/getexpenses/', { headers: new HttpHeaders({ 'session': '5a4c50b645e2964054e516c8' }) })
      .subscribe(data => {
        //console.log(data);
        this.expenses = JSON.parse(JSON.stringify(data));
        console.log("Expenses : Report : "+JSON.stringify(this.expenses))
        this.expenses.forEach((item : any) =>{
          this.amount  += item.expamount
  
  
        });
        console.log (" this total "+this.amount)
        this.total = Number(this.amount.toFixed(2));
        let holder : any = {}

        this.expenses.forEach(function(d:any) {
          if (holder.hasOwnProperty(d.expcat.toUpperCase())) {
            holder[d.expcat.toUpperCase()] = holder[d.expcat.toUpperCase()] + d.expamount;
          } else {
            holder[d.expcat.toUpperCase()] = d.expamount;
          }
        });

        console.log("holder " +holder)


        for (var prop in holder) {
          this.obj2.push({ expcat: prop, totalexpamount: holder[prop].toFixed(2) });
        }
        
        console.log(this.obj2)
      })
    
  }

  
};


