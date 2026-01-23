import { Component } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessagesServices } from '../../services/messages';


@Component({
  selector: 'app-messages',
  imports: [FontAwesomeModule],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
})
export class Messages {

  faTimes = faTimes;
  
  constructor(public messagesService: MessagesServices) {}
  
  ngOnInit(): void {}
  
}
