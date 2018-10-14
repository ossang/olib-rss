import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpParams} from '@angular/common/http';
import { ApiService } from '../../services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private apiService :ApiService) { }
 
  uploadFile(url:string, file: File): Observable<HttpEvent<{}>> {
    return this.apiService.multipart(url,file);
  }

  getFiles(): Observable<any> {
    return this.apiService.get('/api/file/getallfiles');
  }

  downloadFile(filename): Observable<any> {
    let param = new HttpParams().set("filename",filename);
    return this.apiService.get('/api/file',param);
  }
}
