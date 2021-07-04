import { Component, OnInit } from '@angular/core';
import { SocketsService } from './services/sockets/sockets.service';
import { MeetService } from './services/meet/meet.service';
import { Meet } from './entities/meet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  location = 'Buenos Aires';
  meets: Array<Meet>;
  constructor(
    public socketService: SocketsService,
    private meetService: MeetService
  ) { }

  ngOnInit() {
    this.meetService.getMeets().subscribe(
      meet => {
        console.log(meet);
        this.meets = meet['meet'];
      }
    );
  }

}
