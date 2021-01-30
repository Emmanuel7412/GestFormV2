import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.scss'],
})
export class MyCVComponent implements OnInit {
  path = '../assets/CV_EmPoirier_2020_v4.pdf';
  constructor() {}

  ngOnInit(): void {}
}
