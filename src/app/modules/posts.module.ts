import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../components/posts/posts.component';
import { PostsRoutingModule } from '../components/posts/posts-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from '../components/posts/posts.service';
import { PostDetailComponent } from '../components/posts/post-detail/post-detail.component';

@NgModule({
  declarations: [PostsComponent, PostDetailComponent],
  imports: [CommonModule, PostsRoutingModule, HttpClientModule],
  providers: [PostsService],
})
export class PostsModule {}
