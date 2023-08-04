import { Component, OnInit } from '@angular/core';
import { NewemployeeService } from '../services/newemployee.service';
import { Employee2 } from '../employee2';

@Component({
  selector: 'app-newemployee',
  templateUrl: './newemployee.component.html',
  styleUrls: ['./newemployee.component.css']
})
export class NewemployeeComponent implements OnInit {

  constructor(private _newemployeeService: NewemployeeService) {}

  ngOnInit() {
    
  }
}
