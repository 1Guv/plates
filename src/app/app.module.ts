import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlateCardComponent } from './plate-card/plate-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTabsModule } from '@angular/material';
import { PlateListingComponent } from './plate-listing/plate-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    PlateCardComponent,
    PlateListingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTabsModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
