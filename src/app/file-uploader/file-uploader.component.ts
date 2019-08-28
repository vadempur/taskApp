import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/24px.svg'));
  }

  ngOnInit() {
  }
  
  src;
  imgPreview=false;


  uploadAttachment(file,event){
    this.imgPreview=false;
    if(event.target.files&&event.target.files[0]){
      var reader=new FileReader()
      reader.readAsDataURL(event.target.files[0])

      reader.onload=(event)=>{

        this.src=event.target['result']
        this.imgPreview=true;
      }
    }
  }
  openFile(){
    document.getElementById('file').click();
  }

  uploadImg(){
    this.imgPreview=false;
    //calling api

  }

}
