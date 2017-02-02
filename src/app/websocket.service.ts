import { Injectable } from '@angular/core';
import { Subject, Observer, Observable } from 'rxjs';

@Injectable()
export class WebsocketService {

  constructor() {
   }

  public createWebsocketService(): Subject<MessageEvent> {
    let socket = new WebSocket("ws://livestats.proxy.lolesports.com/stats");
    let observable = Observable.create(
      (observer: Observer<MessageEvent>) => {
        socket.onmessage = observer.next.bind(observer);
        socket.onerror = observer.next.bind(observer);
        socket.onclose = observer.complete.bind(observer);
        return socket.close.bind(socket);
      }
    );
    let observer = {
      next: (data: Object) => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.send(JSON.stringify("["+data+"]"));
        }
      }
    };
    return Subject.create(observer, observable);
  }

}
