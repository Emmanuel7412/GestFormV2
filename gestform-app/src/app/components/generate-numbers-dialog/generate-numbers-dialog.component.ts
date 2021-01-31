import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../check-number/check-number.component';

@Component({
  selector: 'app-generate-numbers-dialog',
  templateUrl: './generate-numbers-dialog.component.html',
  styleUrls: ['./generate-numbers-dialog.component.scss'],
})
export class GenerateNumbersDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<GenerateNumbersDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
