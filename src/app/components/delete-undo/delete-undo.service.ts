import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

interface ICountdowns {
  [key: string]: Countdown;
}

interface Countdown {
  timer: number;
  interval: number;
  countDownValue: BehaviorSubject<number>;
}

@Injectable()
export class DeleteUndoService {
  private countdowns: ICountdowns = {};

  addCountDown(id: string, action: () => any): Observable<number> {
    // To show countdown value
    const countDownValue: BehaviorSubject<number> = new BehaviorSubject(3);

    // Countdown interval. To show countdown value
    const interval = window.setInterval(() => {
      const value = countDownValue.getValue();
      countDownValue.next(value - 1);
    }, 1000);

    // Timer to emit action
    const timer = window.setTimeout(() => {
      clearInterval(interval);
      action();
    }, 3000);

    this.countdowns[id] = {
      countDownValue,
      interval,
      timer,
    };
    return countDownValue.asObservable();
  }

  undoCountDown(id: string) {
    clearTimeout(this.countdowns[id].timer);
    clearInterval(this.countdowns[id].interval);
    delete this.countdowns[id];
  }

  getCountDownValue(id: string): Observable<number> | null {
    const coundown = this.countdowns[id];
    if (!coundown || !coundown.countDownValue) {
      return null;
    }
    return coundown.countDownValue.asObservable();
  }
}
