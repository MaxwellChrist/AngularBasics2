import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent implements OnInit {
  newServerName: string = '';
  newServerContent: string = '';
  @Output() createServer = new EventEmitter<{name: string, content: string}>();
  @Output() createBlueprint = new EventEmitter<{name: string, content: string}>();

  constructor() {}

  ngOnInit(): void {}

  onAddServerFromForm() {
    this.createServer.emit({name: this.newServerName, content: this.newServerContent});
  }

  onAddBlueprintFromForm() {
    this.createBlueprint.emit({name: this.newServerName, content: this.newServerContent});
  }

}
