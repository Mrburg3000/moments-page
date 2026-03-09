import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Moment } from '../../Moments';

@Component({
  selector: 'app-moment-form',
  imports: [ReactiveFormsModule],
  templateUrl: './moment-form.html',
  styleUrl: './moment-form.css',
})
export class MomentForm implements OnInit, OnChanges {
  @Output() onsubmit = new EventEmitter<Moment>();
  @Input() btnText: string = '';
  @Input() momentData: Moment | null = null;
  
  momentForm!: FormGroup;
  submitted = false;
  
  
  
  ngOnInit() {
    this.momentForm = new FormGroup({
      id: new FormControl(this.momentData ? this.momentData.id :""),
      title: new FormControl(this.momentData ? this.momentData.title : "", [Validators.required]),
      description: new FormControl(this.momentData ? this.momentData.description : "", [Validators.required]),
      image: new FormControl(""),
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['momentData'] && this.momentData && this.momentForm) {
      this.momentForm.patchValue({
        id: this.momentData.id,
        title: this.momentData.title,
        description: this.momentData.description,
      });
    }
  }
  
  get title() {
    return this.momentForm.get('title');
  }

  get description() {
    return this.momentForm.get('description');
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.momentForm.patchValue({ image: file });
  }
  
  submit() {
    this.submitted = true;
    if (this.momentForm.invalid) {
      return;
    }
    
    console.log(this.momentForm.value);
    
    this.onsubmit.emit(this.momentForm.value);
  }
}
