import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {

  filteredArray = ["India","Australia","South Africa","England"];
  // filtered:{
  //   text: string
  // }[];
  filtered: Array<any>=[];
  

  constructor() { }

  ngOnInit() {
    console.log(this.filteredArray);
    console.log(this,"this??");
    
  console.log(typeof this.filtered);
  // let that=this;
  this.filteredArray.forEach(e=>{
    // console.log(e)
    // console.log(this,"is this accessible inside map?")
    let temp={
      text:e
    };
    this.filtered.push(temp);
  })
    console.log(this.filtered,"filtered");
  // this.filtered.push
    // ]this.filteredArray.map(e=>{
    //          let temp = {
    //            text : e
    //          };
    //           this.filtered.push(temp);
    // })
    // console.log(this.filtered,"a");
  }

}
