import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{name: "test", type: "server", content: "just a test"}];

  onAddServer(serverInfo: {name: string, content: string}) {
    this.serverElements.push({
      name: serverInfo.name,
      type: 'server',
      content: serverInfo.content
    });
  }

  onAddBlueprint(serverInfo: {name: string, content: string}) {
    this.serverElements.push({
      name: serverInfo.name,
      type: 'blueprint',
      content: serverInfo.content
    });
  }
}
