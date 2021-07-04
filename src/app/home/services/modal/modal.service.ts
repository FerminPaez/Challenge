import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../common/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  public confirm(
  title: string,
  message: string,
  btnOkText: string,
  btnCancelText: string,
  dialogSize: 'sm' | 'lg'): Promise<boolean>{
    const modalRef = this.modalService.open(
                          ModalComponent,
                          {
                            size: dialogSize,
                            backdrop : 'static',
                            keyboard : true,
                            centered : true
                          }
                        );
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;

    return modalRef.result;
  }

}
