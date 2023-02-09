import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit  {
  @Input() element: {name: string, type: string, content: string};
  @ViewChild('heading') heading: ElementRef;

  constructor() { }

  ngOnInit(): void {}
}
