import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage-in-beta',
  templateUrl: './homepage-in-beta.component.html',
  styleUrls: ['./homepage-in-beta.component.css']
})
export class HomepageInBetaComponent {
  @Input() inBetaData;

  newSubmitter: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.newSubmitter = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', [
        Validators.required,
        Validators.minLength(5)]
      ]
    })
  }

  onSubmit() {
    console.log(this.newSubmitter.value);
    this.newSubmitter.reset();
  }

  get firstname() { return this.newSubmitter.get('firstname'); }
  get lastname() { return this.newSubmitter.get('lastname'); }
  get email() { return this.newSubmitter.get('email'); }
  get phone() { return this.newSubmitter.get('phone'); }


}
