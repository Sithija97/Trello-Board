import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { CardComponent } from './card/card.component';
import { UserComponent } from './user/user.component';
import { TWayDBindComponent } from './tway-dbind/tway-dbind.component';
import { LastComponent } from './last/last.component';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    CardComponent,
    UserComponent,
    TWayDBindComponent,
    LastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
