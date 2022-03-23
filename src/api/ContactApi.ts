import ConfigApi from './ConfigApi';
import Contact from '../models/Contact';

class ContactApi extends ConfigApi {
  contorller: string;

  constructor() {
    super();
    this.contorller = '/contacts.json';
  }

  async getAll() {
    const response = await fetch(`${this.baseUrl}${this.contorller}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Fetch failded!');
    }

    const transformContacts = [];

    for(const key in data) {
      const contactObj = {
        ...data[key],
        id: key
      };
      transformContacts.push(contactObj);
    }

    return transformContacts;
  }

  async add(body: Contact) {
    const response = await fetch(`${this.baseUrl}${this.contorller}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Add failded!');
    }

    return null;
  }
}

export default new ContactApi();
