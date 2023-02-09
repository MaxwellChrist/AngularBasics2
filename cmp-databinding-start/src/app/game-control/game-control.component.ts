import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Input() score: number = 0;
  @Output() scoreStart = new EventEmitter<number>()
  onChange;
  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.onChange = setInterval(() => {
      this.score++;
      this.scoreStart.emit(this.score);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.onChange);
  }
}
