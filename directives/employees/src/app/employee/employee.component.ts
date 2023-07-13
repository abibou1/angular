import { Component } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  emplist: Employee[]=[];

  constructor() {}

  ngOnInit() {

    this.emplist = [
      {
        employee_id: 1,
        first_name: "John",
        last_name: "One",
        salary: 21000,
        dob: "01/01/1999",
        email: "john1@gmail.com"
      },
      {
        employee_id: 2,
        first_name: "Ron",
        last_name: "Two",
        salary: 22000,
        dob: "02/01/1999",
        email: "john2@gmail.com"
      },
      {
        employee_id: 3,
        first_name: "Harry",
        last_name: "Three",
        salary: 23000,
        dob: "03/01/1999",
        email: "john3@gmail.com"
      },
      {
        employee_id: 4,
        first_name: "Maguire",
        last_name: "Four",
        salary: 24000,
        dob: "04/01/1999",
        email: "john4@gmail.com"
      },
    ]

  }
  
}
