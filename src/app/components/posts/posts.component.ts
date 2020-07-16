import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Post } from './posts.models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostsService) {}
  public posts: Post[] = [];

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.postService
      .getAllPosts()
      .subscribe((data: Post[]) => (this.posts = data));
  }
}
