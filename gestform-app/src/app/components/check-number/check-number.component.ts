import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { GenerateNumbersDialogComponent } from '../generate-numbers-dialog/generate-numbers-dialog.component';
import { NumberService } from 'src/app/services/number.service';
import { ModuloResult } from 'src/app/models/moduloResult';

export interface DialogData {
  min: number;
  max: number;
  quantity: number;
}

@Component({
  selector: 'app-check-number',
  templateUrl: './check-number.component.html',
  styleUrls: ['./check-number.component.scss'],
})
export class CheckNumberComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  minNumber: number = -500;
  maxNumber: number = 500;
  qtyNumbers: number = 50;

  numbers: number[] = [12, 15, 33];
  resultsCalc: ModuloResult[];

  constructor(public dialog: MatDialog, private numberService: NumberService) {}

  ngOnInit(): void {}

  getResults() {
    this.numberService
      .getResults(this.numbers)
      .subscribe((r) => (this.resultsCalc = r));
    console.log(this.resultsCalc);
  }

  generateNumbersList() {
    this.numbers = [];
    this.numbers = this.getRandomInt(-1000, 1000, 50);
  }

  removeList() {
    this.numbers = [];
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our number
    if ((value || '').trim()) {
      this.numbers.push(Number.parseInt(value));
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(number: number): void {
    const index = this.numbers.indexOf(number);
    if (index >= 0) {
      this.numbers.splice(index, 1);
    }
  }

  getRandomInt(min, max, quantity): number[] {
    var numbers: number[] = [];
    for (let index = 0; index < quantity; index++) {
      const num = Math.floor(Math.random() * (max - min + 1) + min);
      numbers.push(num);
    }
    return numbers;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GenerateNumbersDialogComponent, {
      width: '250px',
      data: {
        min: this.minNumber,
        max: this.maxNumber,
        quantity: this.qtyNumbers,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.numbers = this.getRandomInt(
          result.min,
          result.max,
          result.quantity
        );
      }
    });
  }
}
