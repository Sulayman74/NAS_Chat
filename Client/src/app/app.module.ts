import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthPipe } from './auth/auth.pipe';
import { ErrorComponent } from './error/error.component';
import { LoadingSpinnerComponent } from './utils/loading-spinner/loading-spinner.component';
import { HomeComponent } from './home/home.component';
import { CallsComponent } from './calls/calls.component';
import { ChatsComponent } from './chats/chats.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthPipe,
    ErrorComponent,
    LoadingSpinnerComponent,
    HomeComponent,
    CallsComponent,
    ChatsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
