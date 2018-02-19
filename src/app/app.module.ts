import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { SignupService } from './services/signup.service';
import { UserprofileService } from './services/userprofile.service';
import { CarsService } from './services/cars.service';
import { SharedService } from './services/shared.service';

import { HttpModule } from '@angular/http';
import { UserprofileComponent } from './userprofile/userprofile.component';

import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { AddidComponent } from './addid/addid.component';

//import {MyDatePicker} from 'MyDatePicker/src/my-date-picker';
import { MycarsComponent } from './mycars/mycars.component';
import { AddcarComponent } from './addcar/addcar.component';
import { CardetailsComponent } from './cardetails/cardetails.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		SignupComponent,
		UserprofileComponent,
		HomeComponent,
		AddidComponent,
		MycarsComponent,
		AddcarComponent,
		CardetailsComponent
	],
	imports: [
		BrowserModule,
		routing,
		HttpModule,
		FormsModule,
		ReactiveFormsModule, 
		MDBBootstrapModule.forRoot()
	],
	schemas: [ NO_ERRORS_SCHEMA ],
	providers: [SignupService,UserprofileService,CarsService,SharedService,AuthGuard ],
	bootstrap: [AppComponent]
})
export class AppModule { }
