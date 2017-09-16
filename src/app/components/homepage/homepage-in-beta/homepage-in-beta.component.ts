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
      phone: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.newSubmitter.value);
    this.newSubmitter.reset();
  }

}
