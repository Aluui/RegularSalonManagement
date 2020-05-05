const client = class Client {
    firstName;
    lastName;
    get fullName() {
        return this.firstName + '' + this.lastName;
    }
    emailAddress;
    phoneNumber;
    address;
    birthday;
    preferredContact;
    serviceDiscountPercent;
    productDiscountPercent;
    accountBalance;
    firstApptDate;
    lastApptDate;
    futureAppointments; //change to array of referrals model once created
    photos;
    referredBy;
    referrals;
    ageGroup;
    gender;
    notes;
    serviceHistory; //change to array of services model once created.
    purchases; //Change to purchases model once created
};

module.exports = client;
