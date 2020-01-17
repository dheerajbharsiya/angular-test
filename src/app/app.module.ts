import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers';
import { converterReducer } from './converter/converter.reducer';
import { ConverterService } from './converter/converter.service';
import { ConverterEffect } from './converter/converter.effect';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      converterData : converterReducer
    }),
    EffectsModule.forRoot([ConverterEffect])
  ],
  providers: [ConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
