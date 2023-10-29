import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/types/Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  name!: string;
  mobile!: string;
  email!: string;  
  package!: number;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
      
  }
  

  onAddEmployee () {
    if(!this.name || !this.mobile || !this.email || !this.package){
      alert("Please fill all the fields");
      return;
    }

    const newEmployee:Employee = {
      name: this.name,
      mobile: this.mobile,
      email: this.email,
      package: this.package
    }


    this.employeeService.addEmployee(newEmployee).subscribe(
       (addedEmployee) => {
           console.log("addedEmployee",addedEmployee);
           this.router.navigate(['/']);
           
           //reseting the values
           this.name = "";
           this.mobile = "";
           this.email = "";
           this.package = 0;

          //  this.employeeService.getAllEmployees(); 
          // because when the home component will initialize it will refetch the all employees.
       },
       (error) => {
        console.log("Error", error)
       }
    )
    
  }

}
