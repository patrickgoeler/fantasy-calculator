import { Component, OnInit } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { WebsocketService } from './websocket.service';
import { Subject, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  private socket: Subject<any>;
  private message;
  private message2;
  i = 1;

  constructor(private websocketService: WebsocketService, private http: Http) {
    this.socket = websocketService.createWebsocketService();
  }

  ngOnInit() {
    this.socket.subscribe(
      message => this.message = JSON.parse(message.data)
    );
  }
  displayInfo() {
    for (var data in this.message) {
      console.log(data);
      console.log(this.message[data]);
    }
  }
}
