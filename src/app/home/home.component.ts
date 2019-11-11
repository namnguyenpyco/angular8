import { Component, OnInit, OnDestroy } from '@angular/core';
import { Login } from '../core/models/login-model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  //Typescript
  isType: boolean = false;
  isString: string = 'Angular';
  isNumber: number = 8;
  isArray: Array<number> = [0,1,2];
  isArray2: number[] = [0,1,2];
  isAny: any = 1;
  isArrayAny: any[] = [1,'2', true];
  loginForm: Login = {name: 'aa', password: '123456', age: 123};

  buildName(firstName: string, lastName?: string): string {
    return firstName + " " + lastName;
  }

  showAge(age: number): void {
    console.log(age);
  }

  //Directives
  public arrayString: any[] = [
    {number: 1, name: 'One'},
    {number: 2, name: 'Two'}
  ];
  public arrayData = [];
  public trueType: boolean;

  // trackByFn = (index, item) => item.number || item.name || index;

  //Pipe
  date = new Date();

  //Binding
  public stringBinding: string = 'String binding';

  public showText: boolean;
  public text: string = 'Text demo';
  public name: string;
  public textModelBinding: string = 'name';
  public valueInit: number = 1;
  public valueExp: number = 2;

  constructor(
  ) { }

  addWord(): void {
    this.stringBinding = 'Hello Angular 8';
    this.trueType = !this.trueType;
  }

  showKey(e) {
    this.name = e;
  }

  getValueExport(e) {
    this.valueExp = e;
  }

  changeNumber() {
    this.valueInit++;
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

}
