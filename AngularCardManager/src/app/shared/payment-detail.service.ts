import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  list: PaymentDetail[];
  readonly rootUrl= '/api';

  constructor(private http:HttpClient) { 
    
  }

  postPaymentDetail(formData: PaymentDetail){
    return this.http
      .post(this.rootUrl + '/PaymentDetails', formData);
  }

  refreshList(){
    this.http
      .get(this.rootUrl + '/PaymentDetails')
      .toPromise()
      .then(res => this.list = res as PaymentDetail[]);
  }
}
