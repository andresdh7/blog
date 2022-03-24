import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  arrPost: Post[];

  constructor(private postsService: PostsService) {
    this.arrPost = [];
  }

  ngOnInit(): void {
    this.arrPost = this.postsService.getAll();
  }

  onChange($event: any) {
    if ($event.target.value !== '') {
      this.arrPost = this.postsService.getByCategory($event.target.value);
    } else {
      this.arrPost = this.postsService.getAll();
    }
  }
}
