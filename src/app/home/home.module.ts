import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FloatButtonComponent } from './common/float-button/float-button.component';
import { MeetComponent } from './common/meet/meet.component';
import { ProfileNotificationButtonComponent } from './common/navbar/profile-notification-button/profile-notification-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from '../../environments/environment';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './common/modal/modal.component';
const config: SocketIoConfig = { url: environment.webSocketURL, options: {} };



@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    SocketIoModule.forRoot(config),
    ReactiveFormsModule,
    NgbModule
    ],
  declarations: [
    ModalComponent,
    HomeComponent,
    NavbarComponent,
    FloatButtonComponent,
    MeetComponent,
    ProfileNotificationButtonComponent],
  exports: [
  ]
})
export class HomeModule { }
