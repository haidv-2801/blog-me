import Blog from '../models/Blog';
import ConfigApi from './ConfigApi';

class BlogApi extends ConfigApi {
  controller: string;

  constructor() {
    super();
    this.controller = '/blogs.json';
  }

  async getAll() {
    const response = await fetch(`${this.baseUrl}${this.controller}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Fetch failded!');
    }

    const transformBlogs = [];

    for (const key in data) {
      const blogObj = {
        ...data[key],
        id: key,
      };

      transformBlogs.push(blogObj);
    }

    return transformBlogs;
  }

  async getById(id: string) {
    const response = await fetch(`${this.baseUrl}/blogs/${id}.json`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Could not fetch blog.');
    }

    if(!data) {
      return data;
    }

    const loadedBlog = {
      ...data,
      id: id,
    };

    return loadedBlog;
  }

  async add(body: Blog) {
    const response = await fetch(`${this.baseUrl}${this.controller}`, {
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

  async update(id: string, body: Blog) {
    const response = await fetch(`${this.baseUrl}/blogs/${id}.json`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Edit failded!');
    }

    return null;
  }
}

export default new BlogApi();
