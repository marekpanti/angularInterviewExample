import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './posts.models';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}
  jsonUrl = 'https://jsonplaceholder.typicode.com/posts';
  jsonGetPostUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';

  getAllPosts() {
    return this.http.get<Post[]>(this.jsonUrl);
  }

  getPostDetail(id) {
    return this.http.get<Post>(this.jsonUrl + '/' + id);
  }

  getPostComments(id) {
    return this.http.get<any>(this.jsonGetPostUrl + id);
  }
}
