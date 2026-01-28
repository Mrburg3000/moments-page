import { Component, OnInit } from '@angular/core';
import { Moment } from '../../../Moments';
import { ActivatedRoute, Router } from '@angular/router';
import { MomentService } from '../../../services/moment';
import { NgIf } from '@angular/common';
import { MomentForm } from "../../moment-form/moment-form";
import { MessagesServices } from '../../../services/messages';


@Component({
  selector: 'app-edit-moment',
  imports: [NgIf, MomentForm],
  templateUrl: './edit-moment.html',
  styleUrl: './edit-moment.css',
})
export class EditMomentComponent implements OnInit {

  moment!: Moment;
  btnText: string = 'Update';
  
  constructor(private momentService: MomentService, private route: ActivatedRoute, private router: Router, private messagesService: MessagesServices) {}
  
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService.getMoment(id).subscribe((item) => {
      this.moment = item.data;
    });
  }
  
  async editHandler(momentData: Moment) {
    
    const id = this.moment.id
    
    const formData = new FormData()
    
    formData.append('title', momentData.title)    
    formData.append('description', momentData.description)
    
    if (momentData.image) {
      formData.append('image', momentData.image);
    }
    
    await this.momentService.updateMoment(id!, formData).subscribe()
    
    this.messagesService.add(`Moment ${id} edited successfully!`)
    
    this.router.navigate(['/']);
    
  }
  
}
