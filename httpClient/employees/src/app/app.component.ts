import { Component } from '@angular/core';
import { NewemployeeService } from './services/newemployee.service';
import { Employee2 } from './employee2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Employees data from API';
  public newemployees:  Employee2[]=[];
  public errorMsg:any = {};
  constructor(private _newEmployeeService: NewemployeeService){ }

  ngOnInit() {

    this._newEmployeeService.getNewemployeeInfo()
    .subscribe(data => this.newemployees=data);

    console.log(this.newemployees);
  }
}
