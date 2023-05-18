import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.sass']
})
export class EditmodalComponent implements OnInit {
  @Input() show: boolean = false
  
  ngOnInit(): void { }
}
