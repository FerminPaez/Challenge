import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbDateStruct, NgbCalendar, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup } from '@angular/forms';
import { ModalService } from '../../services/modal/modal.service';
import { initFormMeet } from '../forms/meetForm';
import { UserService } from '../../services/users/user.service';
import { User } from '../../entities/user';
import { MeetService } from '../../services/meet/meet.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;

  users: Array<string>;
  selected = [];

  closeResult = '';
  model: NgbDateStruct;
  date: {year: number, month: number};

  formMeet: FormGroup;

  constructor(private activeModal: NgbActiveModal,
              private userService: UserService,
              private meetService: MeetService) {
              this.formMeet = initFormMeet();
              this.userService.getUsers().subscribe( user => {
                console.log(user);
                this.users = user['users'];
                console.log(this.users);


              });
             }
  ngOnInit(): void {
  }

  addUser(user){
    this.users.splice(this.users.indexOf(user), 1);
    this.selected.push(user);
    this.addGuess(this.selected);
  }

  removeUser(user){
    this.selected.splice(this.selected.indexOf(user), 1);
    this.users.push(user);
    this.addGuess(this.selected);
  }

  public addGuess(users){
    const emails = [];
    users.forEach(element => emails.push(element.email));
    this.formMeet.get('guests').setValue(emails);
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept(){
    this.formMeet.get('date').setValue(this.parseDate(this.formMeet.get('date').value));
    this.formMeet.get('status').setValue(true);

    console.log(this.formMeet.value);
    this.meetService.createMeet(this.formMeet.value).subscribe(
      e => console.log(e)
    );
    this.activeModal.close(true);
  }

  parseDate(date){
    const dateToSend = date.split('/');
    return new Date(dateToSend[0], dateToSend[1] - 1, dateToSend[2]);
  }

  public dismiss() {
    this.activeModal.close(false);
  }





}
