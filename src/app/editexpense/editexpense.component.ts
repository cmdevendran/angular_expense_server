import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OnInit, inject } from '@angular/core';
import {nodeserver} from '../../env';
import {session} from '../../env';
import { Router } from '@angular/router';
import {Location, } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';




import { CommonModule } from '@angular/common';
import {HttpClient,  HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-editexpense',
 

  templateUrl: './editexpense.component.html',
  styleUrl: './editexpense.component.css'
})
export class EditexpenseComponent {
  obj : any;
  expenses : any;

  expdate : any;
  expcat : any;
  expamount : any;
  expremark: any;
  _id : any;
  
  expenseForm : FormGroup = new FormGroup({
     expdate : new FormControl(''),
     expcat : new FormControl(''),
     expamount : new FormControl(''),
     expremark : new FormControl(''),
     _id : new FormControl('')


  });


  constructor (private location : Location, private snackBar: MatSnackBar, private http:HttpClient, private router : Router){

    this.obj = this.router.getCurrentNavigation()?.extras.state// should log out 'bar'
    this.expenses = this.obj
    console.log(" EDIT EXPENSES : "+JSON.stringify(this.expenses));
    this.expdate = this.expenses.exp.expdate,
    this.expcat = this.expenses.exp.expcat,
    this.expamount = this.expenses.exp.expamount,
    this.expremark=  this.expenses.exp.expremark
    this._id=  this.expenses.exp._id


    console.log("expcat "+this.expcat)
   
  }

  httpClient = inject(HttpClient)
  data : any;
  categories :any []= [];
  selected = 'option2';
  category!: string;
 

  ngOnInit(): void {
    this.fetchData();
    this.expenseForm.patchValue({"expdate": this.expdate.split("T")[0],"expcat":this.expcat,"expremark":this.expremark,"expamount": this.expamount,"_id":this._id});


 
  
 
   // this.fetchData()
  }
  backClicked() {
    this.location.back();
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
    console.log("SUBMITTED " + JSON.stringify(obj))
    
     this.http.post(
      nodeserver+'/expense/editexp/',JSON.stringify(obj),
      {headers: new HttpHeaders({
        'session' : session,
        'Access-Control-Allow-Origin':'*',
        'Content-Type':  'application/json',
        })}
    ).subscribe((res:any)=>{
      this.snackBar.open("Expense Saved", "OK", {
        duration: 2000
      });
      //  alert("Expense saved");
       // this.expenseForm.reset();
       this.router.navigateByUrl('');
      
  console.log(res)}); 
  }

}
