import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { SecondComponent } from './second/second.component';
import { LogoutComponent } from './logout/logout.component';
import { ChatComponent } from './chat/chat.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SocketserviceComponent } from './socketservice/socketservice.component';
import { SelectroomComponent } from './selectroom/selectroom.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';
import { ChannelhistoryComponent } from './channelhistory/channelhistory.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    CreateuserComponent,
    SecondComponent,
    LogoutComponent,
    ChatComponent,
    NotfoundComponent,
    SocketserviceComponent,
    SelectroomComponent,
    ControlpanelComponent,
    ChannelhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
