import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ErrorComponent } from './error/error.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { ChatsComponent } from './chats/chats.component';
import { CallsComponent } from './calls/calls.component';
import { SettingsComponent } from './settings/settings.component';



const routes: Routes = [
  {path: '', redirectTo:'auth', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'calls', component: CallsComponent},
  {path: 'chats', component: ChatsComponent},
  {path: 'settings', component: SettingsComponent},
  { path: 'not-found', component: ErrorComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
