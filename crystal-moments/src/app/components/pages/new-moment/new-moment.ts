import { Component } from '@angular/core';
import { MomentForm } from "../../moment-form/moment-form";
import { Moment } from '../../../Moments';
import { MomentService } from '../../../services/moment';



@Component({
  selector: 'app-new-moment',
  imports: [MomentForm],
  templateUrl: './new-moment.html',
  styleUrl: './new-moment.css',
})
export class NewMoment {
  btnText: string = 'Share';
  
  constructor(private momentService: MomentService) {}
  
  ngOnInit(): void {}
  
  async createHandler(moment: Moment) {
    const formData = new FormData();
    formData.append("title", moment.title);
    formData.append("description", moment.description);
    if (moment.image) {
      formData.append("image", moment.image);
    }
    
    await this.momentService.createMoment(formData).subscribe();
    
  }
}
