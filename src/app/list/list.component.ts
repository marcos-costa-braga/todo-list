import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  item: string;
  list = ['Assistir aula EAD'];

  constructor() { }

  ngOnInit(): void {
  }

  createItem(): void{
    this.list.push(this.item);
    this.item = '';
  }
}
