import { Component } from '@angular/core';
import { MomentForm } from "../../moment-form/moment-form";
import { Moment } from '../../../Moments';
import { MomentService } from '../../../services/moment';
import { MessagesServices } from '../../../services/messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  imports: [MomentForm],
  templateUrl: './new-moment.html',
  styleUrl: './new-moment.css',
})
export class NewMoment {
  btnText: string = 'Share';
  
  constructor(private momentService: MomentService, private messagesService: MessagesServices, private router: Router) {}
  
  ngOnInit(): void {}
  
  createHandler(moment: Moment) {
    const formData = new FormData();
    formData.append("title", moment.title);
    formData.append("description", moment.description);
    if (moment.image) {
      formData.append("image", moment.image);
    }
    
    this.momentService.createMoment(formData).subscribe({
      next: (response) => {
        console.log('Moment created:', response);
        this.messagesService.add("Moment created successfully!");
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error creating moment:', err);
        this.messagesService.add("Error creating moment. Please try again.");
      }
    });
  }
}
