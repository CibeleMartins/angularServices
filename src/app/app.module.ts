import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';

// servic es
import { AccountService } from './account.service';
import { LoggingService } from './logging.service';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { SnippetComponent } from './components/snippet/snippet.component';
import { NewSnippetComponent } from './components/new-snippet/new-snippet.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    SnippetsComponent,
    SnippetComponent,
    NewSnippetComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule
   
  ],
  providers: [AccountService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
