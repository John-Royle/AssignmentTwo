import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ChatComponent} from './chat/chat.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {CreateuserComponent} from './createuser/createuser.component';
import {LogoutComponent} from './logout/logout.component';
import {SelectroomComponent} from './selectroom/selectroom.component';
import {ControlpanelComponent} from './controlpanel/controlpanel.component';

import {SecondComponent} from './second/second.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"selectroom", component:SelectroomComponent},
  {path:"chat", component:ChatComponent},
  {path:"createuser", component:CreateuserComponent},
  {path:"404", component:NotfoundComponent},
  {path:"logout", component:LogoutComponent},
  {path:"controlpanel", component:ControlpanelComponent},
  {path:"second", component:SecondComponent},
  {path:"**", redirectTo: '404'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
