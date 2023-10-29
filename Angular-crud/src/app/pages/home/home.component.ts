import { Component } from '@angular/core';
import { Employee } from 'src/types/Employee';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

   Employees : Employee[] = [
    {
      id : 1,
      name : 'Rushikesh Dudhe',
      mobile : '7028187615',
      email : 'abc@example.com',
      package : 4
    },
    {
      id : 2,
      name : 'Bhavesh Gugliya',
      mobile : '7028187615',
      email : 'abc@example.com',
      package : 5
    },
    {
      id : 3,
      name : 'Chandan Jadhao',
      mobile : '7028187615',
      email : 'abc@example.com',
      package : 6
    },
    {
      id : 4,
      name : 'Amit Bhagat',
      mobile : '7028187615',
      email : 'abc@example.com',
      package : 5
    }
   ]

}
