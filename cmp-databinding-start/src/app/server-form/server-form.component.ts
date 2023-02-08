import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})
export class ServerFormComponent implements OnInit {
  // newServerName: string = '';
  // newServerContent: string = '';
  @Output() createServer = new EventEmitter<{name: string, content: string}>();
  @Output() createBlueprint = new EventEmitter<{name: string, content: string}>();

  constructor() {}

  ngOnInit(): void {}

  onAddServerFromForm(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.createServer.emit({name: serverNameInput.value, content: serverContentInput.value});
  }

  onAddBlueprintFromForm(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.createBlueprint.emit({name: serverNameInput.value, content: serverContentInput.value});
  }

}
