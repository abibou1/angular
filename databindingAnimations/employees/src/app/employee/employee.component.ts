import { Component } from '@angular/core';

import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees: Employee[] = [];
  showEdit: boolean = false;

  constructor() {}

  ngOnInit() {

    this.employees = [

      {
        employee_id: 1,
        first_name: "John",
        last_name: "Doe",
        salary: 21000,
        dob: "01/01/1999",
        email: "john@gmail.com",
        action: "submit"

      },

      // {
      //   employee_id: 2,
      //   first_name: "Johnny",
      //   last_name: "Dang",
      //   salary: 30000,
      //   dob: "01/01/1989",
      //   email: "johnny@ggmail.com",
      //   action: "submit"

      // }
    ]
  }

  editEmp(){
    this.showEdit = true;
  }
  
  updateEmp(){
    this.showEdit = false;
  }
  
}
