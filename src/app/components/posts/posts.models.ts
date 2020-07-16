export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}
export interface Comment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}
