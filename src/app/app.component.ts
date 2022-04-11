import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
 public assunto:String= 'Angular';
 public aula:number = 10;
 public aux:number = 0;
 public tipo:String= 'text';
 mudarAssunto(){
   if(this.aux%2==0){
   this.assunto = "PHP";
   this.aux+=1;
   }
   else{
    this.assunto = "Angular";
    this.aux+=1;
   }
 }
}
