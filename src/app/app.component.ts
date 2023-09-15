import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  players=["Alheithem","Kokomi","Fischel"];
  message:string="Hello Genshin!";
  i:number=0;
  inputValue:string="Initial Value";
  activities=["Swimming","Breakfast","College","Shopping","Dinner"];
  swim:boolean=false;
  break:boolean=false;
  col:boolean=false;
  shop:boolean=false;
  dine:boolean=false;
  showChange(data:any,event:any){
    if(data==this.activities[0]){
      if(event.target.checked==true){
        this.swim=true;
      }
      else{
        this.swim=false;
      }
    }
    else if(data==this.activities[1]){
      if(event.target.checked==true){
        this.break=true;
      }
      else{
        this.break=false;
      }
    }
    else if(data==this.activities[2]){
     
      if(event.target.checked==true){
        this.col=true;
      }
      else{
        this.col=false;
      }
    }
    else if(data==this.activities[3]){
      if(event.target.checked==true){
        this.shop=true;
      }
      else{
        this.shop=false;
      }
    }
    else if(data==this.activities[4]){
      if(event.target.checked == true){
        this.dine=true;
      }
      else{
        this.dine=false;
      }
    }
    
  }
}
                                     