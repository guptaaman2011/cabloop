import { Routes,RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HomeComponent } from './home/home.component';
import { AddidComponent } from './addid/addid.component';
import { MycarsComponent } from './mycars/mycars.component';
import { AddcarComponent } from './addcar/addcar.component';
import { CardetailsComponent } from './cardetails/cardetails.component';
import { AuthGuard } from './auth.guard';

const APP_ROUTES: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'user-profile', component: UserprofileComponent,canActivate: [AuthGuard] },
	{ path: 'add-id', component: AddidComponent ,canActivate: [AuthGuard] },
	{ path: 'my-car', component: MycarsComponent,canActivate: [AuthGuard] },
	{ path: 'add-car', component: AddcarComponent,canActivate: [AuthGuard] },
	{ path: 'car-details', component: CardetailsComponent,canActivate: [AuthGuard] },
];

export const routing = RouterModule.forRoot(APP_ROUTES);