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
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.scss']
})
export class OfficerComponent implements OnInit {
URL =environment.BaseUrl;
  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public powerCardChartData1: any;
  public powerCardChartData2: any;
    listData: any;
    officerForm:FormGroup;
    editForm:FormGroup;
    id:any;
    verifOfficer:boolean = false;
  constructor(private fb:FormBuilder,private http:HttpClient) {
    this.supportChartData1 = SupportChartData1.supportChartData;
    this.supportChartData2 = SupportChartData2.supportChartData;
    this.seoChartData1 = SeoChart1.seoChartData;
    this.seoChartData2 = SeoChart2.seoChartData;
    this.seoChartData3 = SeoChart3.seoChartData;
    this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    this.powerCardChartData2 = PowerCardChart2.powerCardChartData;
    this.officerForm = fb.group({
      phone: ['',Validators.required],
    fullName:  ['',Validators.required],
    email:  ['',Validators.required],
    password:  ['',Validators.required],
    confirmPassword:  ['',Validators.required],
    userType: "officer",
    appartementId:"null",
    architectureId:"null"

    });
    this.getOfficerList();
    this.editForm = fb.group({
      userId: ['',Validators.required],
      phone: ['',Validators.required],
      fullName:['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required],
      userType:"officer",
      appartementId:"null",
      architectureId:"null"

    })
  }
    
  ngOnInit() {

  } 
async getOfficerList(){
  return await this.http.get<any>(this.URL+'User').subscribe(response=>{
    this.listData = response.data.filter(x => x.userType === "officer");
  });
}
  onSubmit(officerForm:FormGroup){
  officerForm.patchValue({phone:'966'+officerForm.value.phone});
  this.http.post<any>(this.URL+'User',officerForm.value).subscribe(res=>{
      window.location.reload();
    },err =>{
      console.log(err.error)
      this.verifOfficer = true;
    }
   
  );
  }
  DeleteOfficer(id:any){
    this.http.delete<any>(this.URL+'User'+'/'+id).subscribe(data=>{
      window.location.reload();
    });
  }
  async ediitOfficer(id:any){
    this.id= id;
   return await this.http.get<any>(this.URL+'User'+'/'+id).subscribe(data=>{
      this.editForm.setValue({userId:data.userId,phone:data.phone,fullName:data.fullName,email:data.email,password:data.password,confirmPassword:data.confirmPassword,userType:data.userType,appartementId:"null",architectureId:"null"});
      console.log('Edit form data ',this.editForm.value);
    });
  
  }
 async onEdit(editForm:FormGroup){
    var checkPone = editForm.value.phone.substring(0,3);
    console.log('substring',checkPone);
    if(checkPone != '966'){
      editForm.patchValue({phone:'966'+editForm.value.phone});
    }
   await this.http.put<any>(this.URL+'User'+'/'+this.id,editForm.value).subscribe(res=>{
      window.location.reload();
    },
     err =>{
       this.verifOfficer = true;
     }
    );
  }
}
