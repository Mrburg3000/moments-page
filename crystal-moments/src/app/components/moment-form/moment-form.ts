import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  imports: [ReactiveFormsModule],
  templateUrl: './moment-form.html',
  styleUrl: './moment-form.css',
})
export class MomentForm implements OnInit {
  @Input() btnText: string = '';

  momentForm!: FormGroup;
  submitted = false;

  ngOnInit() {
    this.momentForm = new FormGroup({
      id: new FormControl(""),
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      image: new FormControl(""),
    })
  }

  get title() {
    return this.momentForm.get('title');
  }

  get description() {
    return this.momentForm.get('description');
  }

  submit() {
    this.submitted = true;
    if (this.momentForm.invalid) {
      return;
    }
    
    console.log("Posted!");
  }
}
