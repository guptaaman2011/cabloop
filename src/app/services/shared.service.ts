import { Injectable } from '@angular/core';
import { CarDetails } from '../mycars/carsdetails.interface';

@Injectable()
export class SharedService {

	constructor() { }

	sharedDetails: CarDetails;
}
