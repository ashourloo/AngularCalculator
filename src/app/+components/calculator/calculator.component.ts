import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  equal() {
    const a=Number(this.previousValue);
    const b=Number(this.currentValue);
    let result=0;
    switch (this.currentOperator) {
      case '+':
        result=a+b;
        break;
      case '-':
        result=a-b;
        break;
      case 'x':
        result=a*b;
        break;
      case '/':
        result=a/b;
        break;
    }
    this.currentValue=result.toString();
  }
  operator(o: string) {
    this.currentOperator = o;
    this.previousValue = this.currentValue;
    this.currentValue = '0';
  }
  digit(d: string) {
    this.currentValue = Number(this.currentValue + d).toString();
  }
  previousValue: string = '0';
  currentOperator: string = '';
  currentValue: string = '0';
}
