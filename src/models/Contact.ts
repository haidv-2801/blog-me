import { v4 } from 'uuid';

class Contact {
  id: string;
  name: string;
  email: string;
  message: string;

  constructor(name: string, email: string, message: string) {
    this.id = v4();
    this.name = name;
    this.email = email;
    this.message = message;
  }
}

export default Contact;
