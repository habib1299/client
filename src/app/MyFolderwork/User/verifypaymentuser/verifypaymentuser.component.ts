import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-verifypaymentuser',
  templateUrl: './verifypaymentuser.component.html',
  styleUrls: ['./verifypaymentuser.component.scss']
})
export class VerifypaymentuserComponent implements OnInit {
  URL =environment.BaseUrl;
  selectedFile: File;
  public btnLoader: boolean;
  verifForm:FormGroup;
  jwt:any;
  formData:FormData;
  appartementID:any;
  error:boolean = false;
  succe:boolean = false;
  verifCash:boolean = false;
  ErrorMessage : string;

  constructor(private router:Router ,private fb:FormBuilder,private http:HttpClient) {
    this.btnLoader = false;
  }
  onFileSelect(event) {
    
    if (event.target.files.length > 0) {
     this.selectedFile = event.target.files[0];
     console.log('selectd file',this.selectedFile)
    }
  //   this.selectedFile = event.target.files;
    
  //   console.log('image',this.selectedFile[0])
  //   this.formData.append('image', this.selectedFile[0].name)

  //  this.formData.forEach((value,key) => {
  //     console.log(key+" "+value)
  //   });
   
  }
  async onSubmit(){
    
  this.formData = new FormData();
  this.formData.append('image', this.selectedFile);
  var options = { image: this.formData };
    var token = (localStorage.getItem('JWT_Token') || '{}');
    this.jwt = jwt_decode(token);
    this.appartementID = JSON.parse(this.jwt.AppartmentData).appartementId;
    await this.http.get<any>(this.URL+'Appartement'+'/'+this.appartementID).subscribe
     (async () =>{
      var request = new XMLHttpRequest();
      request.open("PATCH",this.URL+'Appartement'+'/'+this.appartementID);
     await request.send(this.formData);
     request.onload = () =>{
       if(request.status == 400 || request.status == 500){
         this.ErrorMessage ="الصورة تم إرسالها بالفعل";
         this.verifCash = true;
         this.succe=false;
       }
       if(request.status == 200){
         this.ErrorMessage = "تم إرسال الصورة بنجاح";
         this.verifCash = true;
         this.succe=true;
       }
      }
       
});
}
      //  const formData = new FormData();
      //  formData.append('appartementId', data.appartementId);
      //  formData.append('appartementNumber', data.appartementNumber);
      //  formData.append('appartementFacturePrix', data.appartementFacturePrix);
      //  formData.append('appartementPercent', data.appartementPercent);
      //  formData.append('appartementStatus', data.appartementStatus);
      //  formData.append('architectureId', data.architectureId);
      //  formData.append('appartementFactureImage', data.appartementFactureImage);
      //  formData.append('image', verifForm.value);
      //  console.log('formData',formData);
        //  let obj = {
        //    "appartementId":data.appartementId,
        //    "appartementFactureImage":"null",
        //    "appartementFacturePrix":data.appartementFacturePrix,
        //    "appartementNumber":data.appartementNumber,
        //    "appartementPercent":data.appartementPercent,
        //    "appartementStatus":data.appartementStatus,
        //    "architectureId":data.architectureId,
        //    "image":this.selectedFile[0]
        //   }
        //   console.log('objj',obj)
        //   var formData = new FormData();
        //   for( var key in obj){
        //     formData.append(key, obj[key]);
        //     console.log(key,obj[key]);
        //   }
        //   console.log('formdata',formData)
        // console.log('data',formData)

  ngOnInit() {
    this.verifForm = this.fb.group({
         image: ['']
    });
  }
  onBtnLoader() {
    this.btnLoader = true;
    setTimeout(() => {
      this.btnLoader = false;
    }, 2000);
  }
  logOut(){
    localStorage.removeItem("JWT_Token");
    this.router.navigate(['auth/signin']);
  }
}
