import { Component, OnInit } from '@angular/core';
import { CarsService } from '../services/cars.service';
import swal from 'sweetalert2';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';
import { CarDetails } from './carsdetails.interface';
import { SharedService  } from '../services/shared.service';

@Component({
	selector: 'app-mycars',
	templateUrl: './mycars.component.html',
	styleUrls: ['./mycars.component.css']
})

export class MycarsComponent implements OnInit {

	carDetails: CarDetails[] = [];

	constructor(private carservice:CarsService,private signupservice: SignupService,private shareddata:SharedService,private router:Router) { }

	ngOnInit() {
		this.getCars();
	}

	public getCars() {
		this.carservice.getAllCars()
			.subscribe(
				(data:any) => this.carDetails = data,
				(error: Response) => console.log(error)
			);
	}

	public showDetails(car: CarDetails): void {
		this.shareddata.sharedDetails = car;
		this.router.navigate(['/car-details']);
	}

	public logOut() {
		this.signupservice.logout();
		this.router.navigate(['']); 
	}
}
