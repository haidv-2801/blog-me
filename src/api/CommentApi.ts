import Comment from '../models/Comment';
const FIREBASE_DOMAIN = 'https://haido-blog-default-rtdb.firebaseio.com';

export const addComment = async (requestData: {blogId: string, commentObj: Comment}) => {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.blogId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentObj),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
};

export const getComments = async (blogId: string) => {
debugger
  
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${blogId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Fetch failded!');
  }

  const transformComments = [];

  for (const key in data) {
    const blogObj = {
      ...data[key],
      id: key,
    };

    transformComments.push(blogObj);
  }

  return transformComments;
};
