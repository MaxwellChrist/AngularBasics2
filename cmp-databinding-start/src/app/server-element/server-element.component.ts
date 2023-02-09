import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input() element: {name: string, type: string, content: string};

  constructor() { 
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called')
  }
}
