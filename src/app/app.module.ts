import{ HttpClientModule } from "@angular/common/http" ;
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModel } from "./app.routing.model";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';


@NgModule({
    declarations : [
        AppComponent,
        HomeComponent,
        HeaderComponent     
    ],
    imports : [
        BrowserModule,
        HttpClientModule,
        NoopAnimationsModule,
        AppRoutingModel,
        FormsModule,
        ReactiveFormsModule,
        AccordionModule,
        BrowserAnimationsModule,
        ButtonModule,
        ChartModule
    ],
    providers : [ 
    ],
    bootstrap : [AppComponent],
})

export class AppModule{}