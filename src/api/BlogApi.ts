import Blog from '../models/Blog';
import ConfigApi from "./ConfigApi";

class BlogApi extends ConfigApi {

  controller: string;

  constructor() {
    super();
    this.controller = '/blogs.json';
  }

  async getAll() {
    const response = await fetch(`${this.baseUrl}${this.controller}`);

    if(!response.ok) {
      throw new Error("Fetch failded!");
    }

    const data = response.json();
    return data;
  }

  async getById(id: string) {}

  async add(body: Blog) {
    const response = await fetch(`${this.baseUrl}${this.controller}`, {
      method: 'POST',
      body: JSON.stringify(body)
    });

    if(!response.ok) {
      throw new Error("Add failded!");
    }
  }
  
  async update(id: string, body: Blog) {}
}

export default new BlogApi;
