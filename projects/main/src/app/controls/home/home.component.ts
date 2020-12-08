import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pio-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public WelcomeTo: string;

  constructor() { 

    this.WelcomeTo = 'Welcome to the home of Pull it Off';
  }

  public ngOnInit(): void { }

}
