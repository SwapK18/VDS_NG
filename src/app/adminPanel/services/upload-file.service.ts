import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  SERVER_URL: string = "http://localhost/VehicalDisplaySystem/admin";

  constructor(private httpClient: HttpClient) { }

  public uploadFile(data) {
    let uploadURL = `${this.SERVER_URL}/upload.php`;

    return this.httpClient.post<any>(uploadURL, data);
  }
}
