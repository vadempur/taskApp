import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  liked=false;


  toggleLike(){

    //call api and increment 
    this.liked=!this.liked
  }
}
