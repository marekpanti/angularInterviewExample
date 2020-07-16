import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post, Comment } from '../posts.models';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}
  public articleId: string;
  public postDetail: Post;
  public comments: Comment[];

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id');
    this.getArticleDetail();
    this.getCommentsDetail();
  }

  getArticleDetail() {
    return this.postService
      .getPostDetail(this.articleId)
      .subscribe((post) => (this.postDetail = post));
  }

  getCommentsDetail() {
    return this.postService
      .getPostComments(this.articleId)
      .subscribe((comment) => (this.comments = comment));
  }
}
