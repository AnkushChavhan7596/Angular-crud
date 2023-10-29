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
  addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.baseUrl}/employees`,employee).pipe(
      catchError(this.handleError)
    )
  }

  // update employee
  updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.baseUrl}/employees/${employee.id}`,employee).pipe(
      catchError(this.handleError)
    )
  }

  // delete employee
  deleteEmployee(employee: Employee): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/employees/${employee.id}`).pipe(
      catchError(this.handleError)
    )
  }

  // get single employee
  getSingleEmployee(employeeId: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/employees/${employeeId}`).pipe(
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
