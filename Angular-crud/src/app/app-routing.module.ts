import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { HomeComponent } from './pages/home/home.component';
import { EditEmployeeComponent } from './pages/edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'add-employee',
    component : AddEmployeeComponent
  },
  {
    path : 'edit-employee/:id',
    component : EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
