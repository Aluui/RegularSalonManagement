import { Address } from './address';
import { Photo } from './photo';
import { Note } from './note';

export class Client {
    firstName: string;
    lastName: string;
    fullName: string = this.firstName + ' ' + this.lastName;
    emailAddress: string;
    phoneNumber: string;
    address: Address = new Address();
    birthday: Date;
    preferredContact: string;
    serviceDiscountPercent: number;
    productDiscountPercent: number;
    accountBalance: number;
    firstApptDate: Date;
    lastApptDate: Date;
    futureAppointments: string; //change to array of referrals model once created
    photos: Photo[];
    referredBy: string;
    referrals: string[]; //change to array of referrals model once created.
    ageGroup: string;
    gender: string;
    notes: Note[];
    serviceHistory: string; //change to array of services model once created.
    purchases: string; //Change to purchases model once created
}
