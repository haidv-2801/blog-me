import { v4 } from 'uuid';

class Blog {
  id: string;
  title: string;
  image: string;
  author: string;
  authAvatar: string;
  createdDate: Date;
  contentSummary: string;
  content: string;

  constructor(
    title: string,
    image:string,
    author: string,
    authAvatar: string,
    contentSummary: string,
    content: string,
  ) {
    this.id = v4();
    this.title = title;
    this.image = image;
    this.author = author;
    this.authAvatar = authAvatar;
    this.createdDate = new Date(Date.now());
    this.contentSummary = contentSummary;
    this.content = content;
  }
}

export default Blog;
