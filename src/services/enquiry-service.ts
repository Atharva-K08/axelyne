import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnquiryService {

  private apiUrl:string = 'http://localhost:8000/api/enquiries/';

  constructor(private http: HttpClient) { }

  submitEnquiry(enquiryData: any) {
    return this.http.post(this.apiUrl, enquiryData);
  }
}
