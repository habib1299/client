import { Component, OnInit } from '@angular/core';
import { SupportChartData1} from '../../../demo/dashboard/dash-default/chart/support-chart-data-1';
import { SupportChartData2} from '../../../demo/dashboard/dash-default/chart/support-chart-data-2';
import { SeoChart1 } from '../../../demo/dashboard/dash-default/chart/seo-chart-1';
import { SeoChart2 } from '../../../demo/dashboard/dash-default/chart/seo-chart-2';
import { SeoChart3 } from '../../../demo/dashboard/dash-default/chart/seo-chart-3';
import { PowerCardChart1 } from '../../../demo/dashboard/dash-default/chart/power-card-chart-1';
import { PowerCardChart2 } from '../../../demo/dashboard/dash-default/chart/power-card-chart-2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { __await } from 'tslib';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-ouser',
  templateUrl: './ouser.component.html',
  styleUrls: ['./ouser.component.scss']
})
export class OuserComponent implements OnInit {
  URL = environment.BaseUrl;
  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public powerCardChartData1: any;
  public powerCardChartData2: any;
    listData: any;
    userForm:FormGroup;
    _architecture:any
    editForm:FormGroup;
   public appartementList:any;
   public appartementEditList:any;
   appartementForm:Object;
   DataAppartement:any;
   _DataAppartement:any;
    architectureList:any;
    sumbitData:any;
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
    this.getAppartementList();
    this.getArchitectureList();

    this.editForm = fb.group({
      userId: ['',Validators.required],
      phone: ['',Validators.required],
      fullName:['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required],
      userType:['',Validators.required],
      appartementId:['',Validators.required],
      architectureId:['',Validators.required]
    });
    // this.getAppartementList();

  }
    
  ngOnInit() {
  } 
async getOfficerList(){
  return await this.http.get<any>(this.URL+'User').subscribe(res=>{
    this.listData = res.data.filter(x => x.userType === "user");
     for(let i=0;i<this.listData.length;i++){
       this.listData[i].appartementId = JSON.parse(this.listData[i].appartementId);
       this.listData[i].architectureId = JSON.parse(this.listData[i].architectureId);
     }
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

 await this.http.post<any>(this.URL+'User',userForm.value).subscribe(async data=>{
  await this.setAppartementStatusToTrue(x.appartementId,x);
   
  }); 
   });
 });
  setTimeout(() => {
    window.location.reload();
  }, 1500);
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
  async getAppartementList(){
    return await this.http.get<any>(this.URL+'Appartement').subscribe(res =>{
      this.appartementEditList = res.data;
      // console.log('appartementList',res.data)
    })
  }
  async getArchitectureList(){
   return await this.http.get<any>(this.URL+'Architecture').subscribe(res=>{
       this.architectureList = res.data;
 
   });
   }

   DeleteUser(id:any){
    this.http.delete<any>(this.URL+'User'+'/'+id).subscribe(data=>{
      window.location.reload();
    });
  }
  async onEdit(editForm:FormGroup){
    var checkPone = editForm.value.phone.substring(0,3);
    if(checkPone != '966'){
      editForm.patchValue({phone:'966'+editForm.value.phone});
    }
    const archID = editForm.value.architectureId;
    const apprtId = editForm.value.appartementId;
    // get architecture By Id
    await this.http.get<any>(this.URL+'Architecture'+'/'+archID).subscribe(async data=>{
      editForm.patchValue({architectureId:JSON.stringify(data)});
    // get appartementById
     await this.http.get<any>(this.URL+'Appartement'+'/'+apprtId).subscribe(async data =>{    
       editForm.patchValue({appartementId:JSON.stringify(data)});
  let x =JSON.parse(editForm.value.appartementId);
  
  await this.http.put<any>(this.URL+'User'+'/'+this.id,editForm.value).subscribe(async data=>{
    // await this.getAppartementDataById(editForm.value.appartementId);
    await this.setAppartementStatusToTrue(x.appartementId,x);
    }); 
     });
   });
     setTimeout(() => {
       window.location.reload();
     }, 1500)
  }

  async onChange(event:any){
    let internData;
    await this.http.get<any>(this.URL + "Appartement").subscribe((res) => {
      internData = res.data;
      for (let i = 0; i < internData.length; i++) {
        internData[i].architectureId = JSON.parse(internData[i].architectureId);
      }
      this.appartementList = internData.filter(
        (x) =>
          x.architectureId.architectureId == event &&
          x.appartementStatus == false
      );
    });
  }


  async ediitUser(id:any){
    this.id= id;
   return await this.http.get<any>(this.URL+'User'+'/'+this.id).subscribe(async res=>{
     const constAppartementId = JSON.parse(res.appartementId).appartementId;
     const constArchitectureId = JSON.parse(res.architectureId).data.architectureId;
     this.editForm.setValue({
      userId:res.userId,
      phone:res.phone,
      fullName:res.fullName,
      email:res.email,
      password:res.password,
      confirmPassword:res.confirmPassword,
      userType:res.userType,
      architectureId:constArchitectureId,
      appartementId:constAppartementId
   
    });
    //  this.onChange(this.editForm.value.architectureId)
    });
  }
}
