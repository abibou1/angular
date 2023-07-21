import { Component, OnInit } from '@angular/core';
import { NewemployeeService } from '../services/newemployee.service';
import { Employee2 } from '../employee2';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {
  newemployeeData: Employee2[] = [];
  errorMessage: string = "this is a error message" ;

  constructor(private _newemployeeService: NewemployeeService) {}

  ngOnInit() {
    this._newemployeeService.getNewemployeeInfo()
      .subscribe(data => { this.newemployeeData = data.data, console.log(this.newemployeeData), this.errorMessage });
  }
}