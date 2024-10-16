import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
@Input() data: any[] = [];
@Input() title = ''
@Input() selectedValue = ''
@Output() selected=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  getSpecificCategory(event: any) {
this.selected.emit(event)
  }
}
