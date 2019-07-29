import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //name = 'Angular';
  serverID: number = 10;
  serverStatus: string = "offline";
  allowNewServer = false;
  serverCreationStatus = "No Server was Created";
constructor() {
  setTimeout(() => {
    this.allowNewServer = true;
    }, 2000);

}

getserverStatus(){
  return this.serverStatus;
  }

onCreateServer() {
  this.serverCreationStatus = "Server was Created";
  }
}
