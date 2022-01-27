import { Component, OnInit } from '@angular/core';
import { SupportChartData1} from '../../../dashboard/dash-default/chart/support-chart-data-1';
import { SupportChartData2} from '../../../dashboard/dash-default/chart/support-chart-data-2';
import { SeoChart1 } from '../../../dashboard/dash-default/chart/seo-chart-1';
import { SeoChart2 } from '../../../dashboard/dash-default/chart/seo-chart-2';
import { SeoChart3 } from '../../../dashboard/dash-default/chart/seo-chart-3';
import { PowerCardChart1 } from '../../../dashboard/dash-default/chart/power-card-chart-1';
import { PowerCardChart2 } from '../../../dashboard/dash-default/chart/power-card-chart-2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {
  URL = environment.BaseUrl;
  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  errorMessage : boolean = false;
  verifConnexion:boolean = false
  public btnLoader: boolean;
  public powerCardChartData1: any;
  public powerCardChartData2: any;
  appartementForm:Object;
    listData: any;
    userForm:FormGroup;
    Message : string;
    _architecture:any
    editForm:FormGroup;
   public appartementList:any;
    architectureList:any;
    id:any;
  constructor(private fb:FormBuilder,private http:HttpClient) {
    this.supportChartData1 = SupportChartData1.supportChartData;
    this.supportChartData2 = SupportChartData2.supportChartData;
    this.seoChartData1 = SeoChart1.seoChartData;
    this.seoChartData2 = SeoChart2.seoChartData;
    this.seoChartData3 = SeoChart3.seoChartData;
    this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    this.powerCardChartData2 = PowerCardChart2.powerCardChartData;
    this.userForm = fb.group({
      phone: ['',Validators.required],
    fullName:  ['',Validators.required],
    email:  ['',Validators.required],
    password:  ['',Validators.required],
    confirmPassword:  ['',Validators.required],
    userType: "user",
    appartementId:['',Validators.required],
    architectureId:['',Validators.required]
    });
    this.getOfficerList();
    this.getArchitectureList();
    this.onChange(this._architecture);
    // this.getAppartementList();

  }
    
  ngOnInit() {

  } 
async getOfficerList(){
  return await this.http.get<any>(this.URL+'User').subscribe(res=>{
    this.listData = res.data.filter(x => x.userType === "user");
  });
}
async setAppartementStatusToTrue(id:any,data){
  this.appartementForm = {
  'appartementId':data.appartementId,
  'appartementNumber':data.appartementNumber,
  'appartementStatus': true,
  'appartementPercent':data.appartementPercent,
  'architectureId':data.architectureId,
  'appartementFacturePrix':data.appartementFacturePrix,
 'appartementFactureImage':data.appartementFactureImage};
   await this.http.put(this.URL+'Appartement'+'/'+id,this.appartementForm).subscribe(data=>{
   
 });
 }
async onSubmit(userForm:FormGroup){
  const archID = userForm.value.architectureId;
  const apprtId = userForm.value.appartementId;
  userForm.patchValue({phone:'966'+userForm.value.phone});
  // get architecture By Id
  await this.http.get<any>(this.URL+'Architecture'+'/'+archID).subscribe(async data=>{
    userForm.patchValue({architectureId:JSON.stringify(data)});
  // get appartementById
   await this.http.get<any>(this.URL+'Appartement'+'/'+apprtId).subscribe(async data =>{    
     userForm.patchValue({appartementId:JSON.stringify(data)});
let x =JSON.parse(userForm.value.appartementId);

 await this.http.post<any>(this.URL+'User',userForm.value).subscribe(async (response)=>{
  await this.setAppartementStatusToTrue(x.appartementId,x);
 
  this.errorMessage = false;
  this.Message = "لقد تم التسجيل بنجاح";
  },
  (err) =>{
    this.Message = "التحقق من بياناتك ";
    this.verifConnexion = true;
    this.errorMessage = true;
  }
  ); 
   });
 });
  setTimeout(() => {
    window.location.reload();
  }, 1500);
}
  DeleteUser(id:any){
    this.http.delete<any>(this.URL+'User'+'/'+id).subscribe(data=>{
      window.location.reload();
    });
  }
  async getArchitectureList(){
   return await this.http.get<any>(this.URL+'Architecture').subscribe(res=>{
       this.architectureList = res.data;
       console.log(res)
   });
   }
  onBtnLoader() {
    this.btnLoader = true;
    setTimeout(() => {
      this.btnLoader = false;
    }, 2000);
  }
  //  async onChange(_architecture){
  //   const  tokenType  = 'Bearer ';
  //   const header = new HttpHeaders().set('Authorization',tokenType + localStorage.getItem("JWT_Token"));
  //   const headers = { headers: header };
  //   return await this.http.get<any>(this._AppartementUrl,headers).subscribe(data=>{
  //     this.appartementList = data.filter(x => x.architectureId == _architecture && x.appartementStatus == false);
  //     // console.log(this.appartementList);
  //   });
  //  }
  async onChange(event:any){
    let internData
    await this.http.get<any>(this.URL+'Appartement').subscribe(res=>{
     internData = res.data;
      for(let i=0;i<internData.length;i++){
        internData[i].architectureId = JSON.parse(internData[i].architectureId);
       }
       this.appartementList = internData.filter(x => x.architectureId.architectureId == event && x.appartementStatus == false);
   });
  }

}
