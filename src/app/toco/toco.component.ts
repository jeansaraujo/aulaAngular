import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toco',
  templateUrl: './toco.component.html',
  styleUrls: ['./toco.component.css']
})
export class TocoComponent implements OnInit {

  constructor() { }

  public poema = "Perdeu os sentidos";

  supera(){
    this.poema = "Siga em frente, encontre um novo amor";
  }
  
  ngOnInit(): void {
    console.log("Me deram um toco ... fiquei tistinho")
  }
  ngDoCheck(): void {
    console.log("Tudo mudou, encontrou um novo amou")
  }

}
