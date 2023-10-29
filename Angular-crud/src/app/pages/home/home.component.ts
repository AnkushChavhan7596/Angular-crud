import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/types/Employee';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

   employees : Employee[] = [];

   constructor(private employeeService: EmployeeService) {}

   ngOnInit() {
    this.getAllEmployees();
   }

   // get all employees
   getAllEmployees () {
      this.employeeService.getAllEmployees().subscribe(
        (data) => {
          this.employees = data;
        },
        (error) => {
          console.log(error);
        }
      )
   }

   // delete employee
   deleteEmployee(employee : Employee) {
    this.employeeService.deleteEmployee(employee).subscribe(
      () => {
       console.log("Employee deleted successfully")

       this.getAllEmployees();
      },
      (error) => {
        console.log(error)
      }
    );
   }


}
