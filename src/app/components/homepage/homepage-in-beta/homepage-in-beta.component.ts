import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewSubmitter } from '../../../shared/models/NewSubmitter';

@Component({
  selector: 'app-homepage-in-beta',
  templateUrl: './homepage-in-beta.component.html',
  styleUrls: ['./homepage-in-beta.component.css']
})
export class HomepageInBetaComponent implements OnInit {
  @Input() inBetaData;

  newSubmitter: NewSubmitter = {
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  }

  constructor() { }

  ngOnInit() {

  }

  submit(form: NgForm) {
    form.reset();
  }

}
