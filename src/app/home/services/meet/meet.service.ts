import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Meet } from '../../entities/meet';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetService {

constructor(private http: HttpClient) { }


  getMeets(){
    const url = `${environment.ApiRestURL}/meet`;
    const token = sessionStorage.getItem('token');
    return this.http.get<Array<Meet>>(url, {headers: {'x-token': token}});
  }

  createMeet(meet: Meet) {
    const url = `${environment.ApiRestURL}/meet`;
    const token = sessionStorage.getItem('token');
    return this.http.post(url, meet, {headers: {'x-token': token}});
  }

}
