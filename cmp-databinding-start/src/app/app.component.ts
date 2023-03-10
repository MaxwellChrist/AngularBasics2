import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  serverElements = [{name: "test", type: "server", content: "just a test"}];
  odd: number[] = [];
  even: number[] = [];

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

  showScore(item: number) {
    if (item % 2 === 0) {
      this.even.push(item);
    } else {
      this.odd.push(item);
    }
  }
}