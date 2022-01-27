import { Component, OnInit } from '@angular/core';
import { SupportChartData1} from '../../../demo/dashboard/dash-default/chart/support-chart-data-1';
import { SupportChartData2} from '../../../demo/dashboard/dash-default/chart/support-chart-data-2';
import { SeoChart1 } from '../../../demo/dashboard/dash-default/chart/seo-chart-1';
import { SeoChart2 } from '../../../demo/dashboard/dash-default/chart/seo-chart-2';
import { SeoChart3 } from '../../../demo/dashboard/dash-default/chart/seo-chart-3';
import { PowerCardChart1 } from '../../../demo/dashboard/dash-default/chart/power-card-chart-1';
import { PowerCardChart2 } from '../../../demo/dashboard/dash-default/chart/power-card-chart-2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-oarchitecture',
  templateUrl: './oarchitecture.component.html',
  styleUrls: ['./oarchitecture.component.scss']
})
export class OarchitectureComponent implements OnInit {
  URL = environment.BaseUrl
  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public powerCardChartData1: any;
  public powerCardChartData2: any;
    listData: any;
    architectureForm : FormGroup;
    editArchitectureForm: FormGroup;
    id:any;
  constructor(private http: HttpClient,private fb : FormBuilder) {
    this.supportChartData1 = SupportChartData1.supportChartData;
    this.supportChartData2 = SupportChartData2.supportChartData;
    this.seoChartData1 = SeoChart1.seoChartData;
    this.seoChartData2 = SeoChart2.seoChartData;
    this.seoChartData3 = SeoChart3.seoChartData;
    this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    this.powerCardChartData2 = PowerCardChart2.powerCardChartData;
    this.architectureForm = fb.group({
      architectureName: ['',Validators.required]
    });
    this.getArchitectureList();
    this.editArchitectureForm = fb.group({
      architectureId:['',Validators.required],
      architectureName: ['',Validators.required]
    })
  }
  onSubmit(architectureForm:FormGroup){
    this.http.post<any>(this.URL+'Architecture',architectureForm.value).subscribe(data=>{
           console.log('data : ',data);
           window.location.reload();
    });
  }
  DeleteArchitecture(id:any){
    this.http.delete<any>(this.URL+'Architecture'+'/'+id).subscribe(data=>{
      console.log(data);
      window;location.reload();
    })
  }
  ngOnInit() {
  }
   async getArchitectureList(){
   return await this.http.get<any>(this.URL+'Architecture').subscribe(response=>{
      this.listData = response.data;
   });
   }
   async getArchitecutreById(id:any){
     this.id = id;
     return await this.http.get<any>(this.URL+'Architecture'+'/'+this.id).subscribe(data =>{
       this.editArchitectureForm.setValue({architectureId:data.architectureId,architectureName:data.architectureName});
     });
   }
   onEdit(editArchitectureForm:FormGroup){
    this.http.put<any>(this.URL+'Architecture'+'/'+this.id,editArchitectureForm.value).subscribe(data=>{
      window.location.reload();
    });
   }
}
