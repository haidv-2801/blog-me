import { v4 } from 'uuid';
class Comment {
  id: string;
  owner: string;
  commentText: string;
  createdDate: Date;

  constructor(
    owner: string,
    commentText: string,
  ) {
    this.id = v4();
    this.owner = owner;
    this.commentText = commentText;
    this.createdDate = new Date(Date.now());
  }
}

export default Comment;
