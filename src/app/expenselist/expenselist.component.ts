import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {nodeserver} from '../../env';
import {session} from '../../env';
import { Router } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';





@Component({
    selector: 'app-expenselist',
    imports: [NgFor, ReactiveFormsModule, MatGridListModule, MatProgressBarModule, MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule],
    templateUrl: './expenselist.component.html',
    styleUrls: ['./expenselist.component.css']
})
export class ExpenselistComponent {
  

  expenseForm = new FormGroup({
    startDate : new FormControl(''),
    endDate : new FormControl('')
})


  httpClient = inject(HttpClient)
  expenses : any;
  categories :any []= [];
  selected = 'option2';
  category!: string;
  amount : number = 0;
  total : number = 0;
  obj2 : any[] = [];

 

 
  constructor(private snackBar: MatSnackBar,private http : HttpClient, private router : Router){

  }


  ngOnInit(): void {
    
    this.fetchData()
  }

  fetchData(){
    this.amount = 0;
  
    this.http.get(nodeserver+'/expense/getexpenses/', { headers: new HttpHeaders({ 'session': '5a4c50b645e2964054e516c8' }) })
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

  onGetExpense(){
    this.amount = 0;
    //debugger;
    const obj = this.expenseForm.value;
    console.log(JSON.stringify(obj))
    this.snackBar.open(JSON.stringify(obj), "OK", {
      duration: 2000
    })

     
     this.http.post(nodeserver+'/expense/getexpenses/',JSON.stringify(obj),{ headers: new HttpHeaders({ 
      'session': '5a4c50b645e2964054e516c8',
      'Access-Control-Allow-Origin':'*',
      'Content-Type':  'application/json',
       }) })
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

        this.obj2 = [];

        for (var prop in holder) {
          this.obj2.push({ expcat: prop, totalexpamount: holder[prop].toFixed(2) });
        }
        
        console.log(this.obj2)
      }) 
  }



  getItemOfExpCat(expcat:any){
    console.log("get item of exp cat" + expcat)
    var obj3 = this.expenses.filter((obj: { expcat: string; }) => obj.expcat.toLowerCase()===expcat.toLowerCase())
    console.log("before navigating : "+JSON.stringify(obj3))
    this.router.navigate(['/showexpense'],{state:{obj3}})
  }

 
  download(){
    const items = this.expenses;
    const replacer = (key:any, value:any) => value === null ? '' : value // specify how you want to handle null values here
    const header = Object.keys(items[0])
    var csv = items.map((row:any) => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','))
    let goodcsv = csv.join('\r\n')
    const blob = new Blob([goodcsv], { type: 'text/csv' });

  // Create a link element
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = "expense.csv";

  // Trigger the download by simulating a click
  link.click();

    console.log(goodcsv);
    
  }

  gotoExpense(){
    this.router.navigate(['/expense'])

  }

 

    
  
};


