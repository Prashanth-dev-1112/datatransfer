import { Hero } from './../hero';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-data-transfer',
  templateUrl: './data-transfer.component.html',
  styleUrls: ['./data-transfer.component.scss']
})
export class DataTransferComponent implements OnInit {

  @Input() hero!: Hero;
  @Input('master') masterName = '';
  constructor() { }

  ngOnInit(): void {

  }

}
