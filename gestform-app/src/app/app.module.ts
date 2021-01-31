import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CheckNumberComponent } from './components/check-number/check-number.component';
import { MyCVComponent } from './components/my-cv/my-cv.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MaterialModule } from './components/modules/shared/material-module';
import { GenerateNumbersDialogComponent } from './components/generate-numbers-dialog/generate-numbers-dialog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CheckNumberComponent,
    MyCVComponent,
    HomeComponent,
    NotfoundComponent,
    GenerateNumbersDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
