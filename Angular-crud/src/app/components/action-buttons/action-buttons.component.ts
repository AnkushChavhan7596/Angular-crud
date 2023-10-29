import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Employee } from 'src/types/Employee';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css']
})
export class ActionButtonsComponent implements OnInit{
  @Input() employee!: Employee;
  @Output() deleteClicked : EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteButtonClick() {
    this.deleteClicked.emit(this.employee);
  }


}
