import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pio-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('welcome-message')
  public WelcomeMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
