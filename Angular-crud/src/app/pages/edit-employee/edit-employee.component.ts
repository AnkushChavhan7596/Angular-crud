import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/types/Employee';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  name!: string;
  mobile!: string;
  email!: string;  
  package!: number;

  employeeId!: number;
  employee!: Employee;


  constructor(private route: ActivatedRoute, private router : Router, private employeeService : EmployeeService) {}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id !== null && id !== undefined) {
      this.employeeId = +id;
      this.getSingleEmployee(this.employeeId);
    }
  }

  getSingleEmployee(employeeId: number) {
    this.employeeService.getSingleEmployee(employeeId).subscribe(
      (employee) => {
        this.name = employee.name;
        this.email = employee.email;
        this.mobile = employee.mobile;
        this.package = employee.package;
        this.employee = employee;
      },
      (error) => {
        console.log(error)
      }
    )
  }


  onEditEmployee() {
    const updatingEmployee = {
      id : this.employeeId,
      name : this.name,
      email : this.email,
      mobile : this.mobile,
      package : this.package
    }

    this.employeeService.updateEmployee(updatingEmployee).subscribe(
      (updatedEmployee)=>{
        console.log("Employee updated successfully",updatedEmployee);
        this.router.navigate(['/']);
      },
      (error)=>{
        console.log(error)
      })
  }

}
