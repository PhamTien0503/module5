import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  sum(firstNumber: string, secondNumber: string) {

    this.result = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
  }

  subtract(firstNumber: string, secondNumber: string) {

    this.result = parseInt(firstNumber, 10) - parseInt(secondNumber, 10);
  }

  multi(firstNumber: string, secondNumber: string) {

    this.result = parseInt(firstNumber, 10) * parseInt(secondNumber, 10);
  }


  divide(firstNumber: string, secondNumber: string) {

    this.result = parseInt(firstNumber, 10) / parseInt(secondNumber, 10);
  }


}
