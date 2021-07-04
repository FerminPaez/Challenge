import { Component, ViewChild } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../../services/modal/modal.service';
@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.scss']
})
export class FloatButtonComponent {
  @ViewChild(ModalComponent, {static: false} ) modalComponent;

  faPlus = faPlus;
  isButtonListVisible = true;

  constructor(private modalService: ModalService) { }



  displayOptions = () => this.isButtonListVisible = !this.isButtonListVisible;

  createMeet = () => this.modalService.confirm(
    'Crear nueva meet', 'algo', 'Aceptar', 'Cancelar', 'lg').then(confirmed => {
    if (confirmed) { console.log('vamos por buen camino'); }
  })
}
