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

    if (!response.ok) {
      throw new Error('Fetch failded!');
    }

    const data = response.json();
    return data;
  }

  async add(body: Contact) {
    const response = await fetch(`${this.baseUrl}${this.contorller}`, {
      method: 'POST',
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Add failded!');
    }
  }
}

export default new ContactApi();
