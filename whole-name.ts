import {LastName} from './last-name'

export class WholeName extends LastName {
  firstName: string;
  wholeName: string;

  constructor(firstName: string, lastName: string) {
    super(lastName)
    this.firstName = firstName
    this.wholeName = this.firstName + ' ' + this.lastName
  }
  print() {
    console.log(`My name is ${this.wholeName}`)
  }
}

