import { DataTransferModule } from './../../../data-transfer/src/lib/data-transfer.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    DataTransferModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
