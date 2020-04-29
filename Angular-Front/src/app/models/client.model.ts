import { Address } from './address.model';
import { Photo } from './photo.model';
import { Note } from './note.model';

export class Client {
    firstName: string;
    lastName: string;
    fullName: string;
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
    futureAppointments: string; // change to array of referrals model once created
    photos: Photo[];
    referredBy: string;
    referrals: string[]; // change to array of referrals model once created.
    ageGroup: string;
    gender: string;
    notes: Note[];
    serviceHistory: string; // change to array of services model once created.
    purchases: string; // Change to purchases model once created
    adminId = localStorage.getItem('adminId');

    getfullName() {
        return (this.fullName = this.firstName + ' ' + this.lastName);
    }
}
