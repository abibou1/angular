import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewemployeeService {
  url : string;

  constructor(private http: HttpClient) {
    this.url = 'http://dummy.restapiexample.com/api/v1/employees';
  }

  getNewemployeeInfo(): Observable<any> {

    return this.http.get(this.url);
  }
}
