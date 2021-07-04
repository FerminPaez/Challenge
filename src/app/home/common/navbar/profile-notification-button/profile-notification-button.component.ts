import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-notification-button',
  templateUrl: './profile-notification-button.component.html',
  styleUrls: ['./profile-notification-button.component.css']
})
export class ProfileNotificationButtonComponent implements OnInit {

  nameForInitials = localStorage.getItem('user_name').split(' ');
  notifications = 0;

  userIniciales = this.nameForInitials[0].charAt(0) + this.nameForInitials[1].charAt(0) ;

  constructor() { }

  ngOnInit() {
  }

}
