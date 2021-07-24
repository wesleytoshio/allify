import { Component, OnInit } from '@angular/core';

import * as data from "../../../../data.json";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public filmes: any[] = [];
   constructor() { 
    const res  = (data as any).default;
    console.log(res);
    this.filmes = res.data;
  }
  
  ngOnInit(): void {
   // console.log(data);
  }

}
