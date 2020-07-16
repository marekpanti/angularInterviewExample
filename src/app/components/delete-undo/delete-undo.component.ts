import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteUndoService } from './delete-undo.service';

@Component({
  selector: 'app-delete-undo',
  templateUrl: './delete-undo.component.html',
  styleUrls: ['./delete-undo.component.scss'],
})
export class DeleteUndoComponent implements OnInit {
  @Input() id: string;
  @Output() remove = new EventEmitter();
  @Input() isDeleteDisabled = false;
  showUndo = false;
  countDownValue: Observable<number> | null;
  constructor(private countdown: DeleteUndoService) {}

  ngOnInit() {
    if (this.isDeleteDisabled === undefined) {
      this.isDeleteDisabled = false;
    }
    this.countDownValue = this.countdown.getCountDownValue(this.id);
    if (this.countDownValue) {
      this.showUndo = true;
    }
  }

  onRemove() {
    this.showUndo = true;
    this.remove.emit();
    this.countDownValue = this.countdown.getCountDownValue(this.id);
  }

  onUndo() {
    this.showUndo = false;
    this.countdown.undoCountDown(this.id);
  }
}
