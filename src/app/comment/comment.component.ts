import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output('commented')commented:EventEmitter<any>=new EventEmitter();

  comment=false;
  

  toggleComment(){
   this.comment=!this.comment;
   this.commented.emit(this.comment)
  }

}
