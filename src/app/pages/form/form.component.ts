import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  contactForm: FormGroup;
  isSubmit: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ["pepe@pepito.es", [Validators.required]],
      name: ["pepe", [Validators.required]],
      age: [],
      description: [],
    })
  }

  ngOnInit(): void {
    
  }

  submit() {
    this.isSubmit = true;

    if(this.contactForm.status === "VALID") {

    }
  }

}
