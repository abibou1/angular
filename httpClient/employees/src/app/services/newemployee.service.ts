import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee2 } from '../employee2';


interface ServerData {
  data: Employee2[];
}
@Injectable({
  providedIn: 'root'
})
export class NewemployeeService {
  //private url : string = "http://dummy.restapiexample.com/api/v1/employees";
  private url : string = "/../../assets/data/newemployee.json"

  constructor(private http: HttpClient) { }

  getNewemployeeInfo(): Observable<Employee2[]> {
   return this.http.get<ServerData>(this.url).pipe(map(data => data.data));
  }
}
