import { WebsocketService } from './../services/websocket.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: 'chat.page.html',
  styleUrls: ['chat.page.scss'],
})
export class ChatPage {
  @ViewChild('chatForm') chatForm: NgForm;
  
  constructor(
    private websocketSvc: WebsocketService
  ) {}

  public onSubmit() {
    const username = this.chatForm.value.name;
    const message = this.chatForm.value.message;
    this.websocketSvc.connectWebsocket(message);
  }
}
