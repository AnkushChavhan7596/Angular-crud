import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { Employee } from 'src/types/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  //get all employees
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`).pipe(
      catchError(this.handleError)
    )
  }

  // add employee

  // update employee

  // delete employee
  deleteEmployee(employee: Employee): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/employees/${employee.id}`).pipe(
      catchError(this.handleError)
    )
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred. Please try again later.';
    if (error.status === 404) {
      errorMessage = 'Employee not found.';
    } else if (error.status === 500) {
      errorMessage = 'Server error. Please try again later.';
    }

    console.error('Error:', error);

    return throwError(errorMessage);
  }
}
