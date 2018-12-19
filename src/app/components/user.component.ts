import { Component } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostService]
})
export class UserComponent  { 
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postService: PostService) {
    this.name = 'John Doe';
    this.email = 'jon@gmail.com';
    this.address = {
      street: '12 Main St',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;

    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby: string) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i: number) {
    this.hobbies.splice(i , 1);
  }

 }


 interface address {
   street: string;
   city: string;
   state: string;
 }

 interface Post {
   id: number;
   title: string;
   body: string;
 }