import { Component } from '@angular/core';
import { Expense } from './expense';
import { FormControl, FormGroup } from '@angular/forms';
import { OnInit, inject } from '@angular/core';
import {nodeserver} from '../../env';
import {session} from '../../env';
import { Router } from '@angular/router';




import { CommonModule, NgFor } from '@angular/common';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-expenseform',
  templateUrl: './expenseform.component.html',
  styleUrls: ['./expenseform.component.css']
})
export class ExpenseformComponent {
  
  expenseForm : FormGroup = new FormGroup({
     expdate : new FormControl(''),
     expcat : new FormControl(''),
     expamount : new FormControl(''),
     expremark : new FormControl('')

  });


  constructor (private http:HttpClient, private router : Router){}

  httpClient = inject(HttpClient)
  data : any;
  categories :any []= [];
  selected = 'option2';
  category!: string;
 

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(){
    this.http.get(nodeserver+'/expense/getcat/',{headers:new HttpHeaders({'session':session})})
    .subscribe(data=>{
      //console.log(data);
      this.data = data;
      this.categories = this.data.categories || [];
      console.log(this.categories);
    })
    
  }

  onSubmitExpense(){
    //debugger;
    const obj = this.expenseForm.value;
    
    this.http.post(
      nodeserver+'/expense/postexp/',JSON.stringify(obj),
      {headers: new HttpHeaders({
        'session' : session,
        'Access-Control-Allow-Origin':'*',
        'Content-Type':  'application/json',
        })}
    ).subscribe((res:any)=>{
      
        alert("Expense saved");
        this.expenseForm.reset();
       // this.router.navigateByUrl('expense');
      
  console.log(res)});
  }

}
  
