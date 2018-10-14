import { Component, OnInit }            from '@angular/core';
import { HttpEventType, HttpResponse }  from '@angular/common/http';
import { FileService }                  from './file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
 
  uploadList = new Array;

  constructor(
    private fileService: FileService) { 

  }
 
  ngOnInit() {
  }
 
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
 
  getFiles(){
    this.fileService.getFiles();
  }

  download(fileName){
    // this.fileService.downloadFile(fileName).subscribe(res=>{
    //   console.log(res)
    // });
  }

  upload() {
    this.progress.percentage = 0;
 
    this.currentFileUpload = this.selectedFiles.item(0);
    this.fileService.uploadFile("/api/file",this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.uploadList.push(event.body);
        console.log('File is completely uploaded!');
      }
    });
 
    this.selectedFiles = undefined;
  }
}
