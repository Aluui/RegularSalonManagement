export class Client {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    phoneNumber: string
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.phoneNumber = phoneNumber;
  }
}
