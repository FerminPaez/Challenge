import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { emit } from 'process';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  public socketStatus = false;

  constructor(
    private socket: Socket
  ) {
     this.checkStatus();
    }

checkStatus() {
  console.log('llego al servicio pero no conecto');
  this.socket.on('connect', () => {
    console.log('connect to a server');
    this.socketStatus = true;
  });
  this.socket.on('disconnect', () => {
    console.log('disconect to a server');
    this.socketStatus = false;
  });

}
emit( event: string, payload?: any, callback? ){
  this.socket.emit(event, payload, callback);
}



}
