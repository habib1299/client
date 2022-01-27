import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-userinterface',
  templateUrl: './userinterface.component.html',
  styleUrls: ['./userinterface.component.scss']
})
export class UserinterfaceComponent implements OnInit {
  URL =environment.BaseUrl;
  public btnLoader: boolean;
  paymentForm:FormGroup;
  jwt:any;
  appartementID:any;
  verifCash:boolean = false;
  architectureName:any;
  AppartmentData:any;
  listData:any;
  ErrorMessage : string;
  constructor(private router:Router ,private fb:FormBuilder,private http:HttpClient) {
    this.paymentForm = fb.group({
      compteNum:['',Validators.required],
      appartementPercent:['',Validators.required],
      appartementFacturePrix:['',Validators.required]
    }) 
    this.btnLoader = false;
    this.getUserData();
  }
  onSubmit(paymentForm:FormGroup){
    var token = (localStorage.getItem('JWT_Token') || '{}');
    this.jwt = jwt_decode(token);
    this.appartementID = JSON.parse(this.jwt.AppartmentData).appartementId;
     this.http.get<any>(this.URL+'Appartement'+'/'+this.appartementID).toPromise()
     .then(data =>{
        if(paymentForm.value.appartementFacturePrix != JSON.parse(data.appartementFacturePrix)){
          this.ErrorMessage = "المبلغ  غير صحيح";
          this.verifCash = true;
        }else{
          this.router.navigate(['normaluser/verifypayments']);
        }
     });
    // 
  }
  ngOnInit() {
  }
  getUserData(){
    var token = (localStorage.getItem('JWT_Token') || '{}');
    var decode = jwt_decode(token);
    this.listData = decode;

 

    this.architectureName = JSON.parse(this.listData.ArchitectureData).architectureName;
    this.AppartmentData = JSON.parse(this.listData.AppartmentData);
    console.log(this.architectureName)
  console.log(this.AppartmentData)
    
    console.log('listdata',this.listData);
this.http.get<any>(this.URL+'Facture').subscribe((data)=>{
  this.http.get<any>(this.URL+'Appartement'+'/'+this.AppartmentData.appartementId).subscribe((res) =>{
    this.AppartmentData = res;
    console.log('after ',this.AppartmentData)
 },
 (err)=>{
   console.log(err)
 });
});

  
  }
  onBtnLoader() {
    this.btnLoader = true;
    setTimeout(() => {
      this.btnLoader = false;
    }, 2000);
  }
  logout(){
    localStorage.removeItem('JWT_Token');
    this.router.navigate(['/auth/signin']);
  }
  goPayments(){
    this.router.navigate(['/normaluser/verifypayments']);
  }
}
