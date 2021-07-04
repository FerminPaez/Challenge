import { FormGroup, FormControl } from '@angular/forms';
export function initFormMeet(){
    return new FormGroup({
        guests      :   new FormControl(),
        status      :   new FormControl(),
        title       :   new FormControl(),
        description :   new FormControl(),
        beer_box    :   new FormControl(),
        temperature :   new FormControl(),
        location    :   new FormControl(),
        date        :   new FormControl(),
        attendance  :   new FormControl([])
    });
}
