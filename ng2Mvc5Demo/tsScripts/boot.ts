import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app';
import {PatientComponent} from "./patient";

@NgModule({
		imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, PatientComponent],
    bootstrap: [AppComponent],
    entryComponents: [PatientComponent]
})
export class AppModule { }