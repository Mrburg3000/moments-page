import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesServices {
  
  messages: string = '';
  
  constructor() { }
  
  add(message: string) {
    this.messages = message;
    
    setTimeout(() => {
      this.clear();
    }, 3000);
  }

  clear() {
    this.messages = '';
  }
}  
