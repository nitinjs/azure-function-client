import { Component } from '@angular/core';
import { Message } from './dtos/message';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public message:Message;
  private baseUrl = "https://azuresmsapp.azurewebsites.net/api/SendSMS?code=1C0hCuuCvos4StChhLcGKe3pDGvoRX3KRMcni2F33oChXUa3Sk3yjQ==";

  constructor(private httpClient: HttpClient){
    this.message = {
      message: "",
      number: ""
    };
  }

  Send(){
    alert("Sending sms...");
    this.httpClient.get(this.baseUrl + '&number=' + this.message.number + '&message=' + this.message.message).subscribe((x)=>{}, (y)=>{},()=>{
            alert("Message sent successfully!");
            this.message = {
      message: "",
      number: ""
    };
        });
  }
}
