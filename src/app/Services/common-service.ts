import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(private http: HttpClient ) { }
  private apiUrl = 'https://localhost:44385/api'; // Replace with your API URL


  

  getAuthHeaders() {
    const token = localStorage.getItem('authToken') || '';
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  } 
  getCustomers() : Observable<any>{
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/Customers/GetCustomers`, { headers });
  }

  addOrUpdateCustomer(data: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/Customers/AddOrUpdateCustomer`, data);

  }

  deleteCustomer(id: any): Observable<any>{
    return this.http.get(`${this.apiUrl}/Customers/DeleteCustomer?Id=`+id);
  }

  getdeliveryBoys() : Observable<any>{
    return this.http.get(`${this.apiUrl}/DeliveryBoy/GetDeliveryBoys`);
  }

  addOrUpdatedeliveryBoy(data: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/DeliveryBoy/AddOrUpdateDeliveryBoy`, data);

  }

  deletedeliveryBoy(id: any): Observable<any>{
    return this.http.get(`${this.apiUrl}/DeliveryBoy/DeleteDeliveryBoy?Id=`+id);
  }

  login(Obj:any ): Observable<any>{
    return this.http.post(`${this.apiUrl}/Auth/login`, Obj);
  }

  verifyOtp(Obj : any): Observable<any>{
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/Auth/verify-otp`, Obj, { headers });

  }
}
