import { Component, Input, OnInit } from '@angular/core';
import { Meet } from '../../entities/meet';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.scss']
})
export class MeetComponent implements OnInit {

  @Input() meet: Meet;

  constructor() { }

  ngOnInit() {
  }

}
