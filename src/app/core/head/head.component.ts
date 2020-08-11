import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  public titulo: string;
  public logo: string;

  constructor() { }

  ngOnInit(): void {
    this.titulo = 'CURSO KC';
    this.logo = '';
  }

}
