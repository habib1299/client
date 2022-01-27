import { Component, Input, OnInit } from '@angular/core';
import { SupportChartData1} from '../../../demo/dashboard/dash-default/chart/support-chart-data-1';
import { SupportChartData2} from '../../../demo/dashboard/dash-default/chart/support-chart-data-2';
import { SeoChart1 } from '../../../demo/dashboard/dash-default/chart/seo-chart-1';
import { SeoChart2 } from '../../../demo/dashboard/dash-default/chart/seo-chart-2';
import { SeoChart3 } from '../../../demo/dashboard/dash-default/chart/seo-chart-3';
import { PowerCardChart1 } from '../../../demo/dashboard/dash-default/chart/power-card-chart-1';
import { PowerCardChart2 } from '../../../demo/dashboard/dash-default/chart/power-card-chart-2';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-ofacture',
  templateUrl: './ofacture.component.html',
  styleUrls: ['./ofacture.component.scss']
})
export class OfactureComponent implements OnInit {
  URL = environment.BaseUrl
  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public powerCardChartData1: any;
  public powerCardChartData2: any;
    listData: any;
    listArchitectureData : any;
    listAppartementData : any;
    id:any;
    EditFacture: FormGroup;
    factureForm:FormGroup;
    setMoneyForm:FormGroup;
    _architecture:any;
    appartementList: FormArray;
    appartementListEdit:FormArray;
    ControlsNumber:any;
    
  constructor(private http:HttpClient ,private fb:FormBuilder) {
    this.supportChartData1 = SupportChartData1.supportChartData;
    this.supportChartData2 = SupportChartData2.supportChartData;
    this.seoChartData1 = SeoChart1.seoChartData;
    this.seoChartData2 = SeoChart2.seoChartData;
    this.seoChartData3 = SeoChart3.seoChartData;
    this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    this.powerCardChartData2 = PowerCardChart2.powerCardChartData;
    this.getListFactureData();
    this.getListArchitectureData();
    // this.onChange(this._architecture)
  }
  ngOnInit() {
    this.factureForm = this.fb.group({
      compteNum:['',Validators.required],
      architectureId: ['',Validators.required],
      appartementList: this.fb.array([ this.createItem() ]),
      facturePrix: 0,
      facturePayed:false
    });
    this.EditFacture = this.fb.group({
      factureId:['',Validators.required],
      compteNum:['',Validators.required],
      architectureId: ['',Validators.required],
      appartementList: this.fb.array([ this.createItem() ]),
      facturePrix: 0,
      facturePayed:false
    });
    this.setMoneyForm = this.fb.group({
      factureId:['',Validators.required],
      compteNum:['',Validators.required],
      architectureId: ['',Validators.required],
      appartementList: ['',Validators.required],
      facturePrix: 0,
      facturePayed:false
    })
    this.ControlsNumber = 1;
  }
  onEdit(EditFacture:FormGroup){

  }

getFactureById(id:any){
  this.http.get<any>(this.URL+'Facture'+'/'+id).subscribe(data =>{
    this.EditFacture.setValue({
      factureId:data.factureId,
      compteNum:data.compteNum,
      architectureId: JSON.parse(data.architectureId).architectureId,
      appartementList: data.appartementList,
      facturePrix: data.facturePrix,
      facturePayed:data.facturePayed
    })
 
  });
}

  async onSubmit(factureForm:FormGroup){
             let architectureID = factureForm.value.architectureId;
             let architectureDataTostring:any;
             let appartementDataToString = {};
             let ArrayObj = factureForm.value.appartementList;
               
              await this.http.get<any>(this.URL+'Architecture'+'/'+architectureID).subscribe(async res=>{
               architectureDataTostring = res.data;
               const FactureObj = {
                compteNum:factureForm.value.compteNum,
                architectureId:JSON.stringify(architectureDataTostring),
                appartementList:JSON.stringify(ArrayObj),
                facturePrix: 0,
                facturePayed:false}
               this.http.post<any>(this.URL+'Facture',FactureObj).subscribe(data=>{
              window.location.reload();
              });
       });
    }

   
         
        

  createItem(): FormGroup {
    return this.fb.group({
      appartementId: ['',Validators.required],
      appartementPercent:['',Validators.required]
    });
  }
setMoneyById(id:any){
this.id = id;
}
async onSetMoney(setMoneyForm:FormGroup){
//  console.log('id =',this.id)
this.http.get<any>(this.URL+'Facture'+'/'+this.id).subscribe(async resp=>{
  setMoneyForm.patchValue({
   factureId:resp.factureId,
   compteNum:resp.compteNum,
   architectureId: resp.architectureId,
   appartementList: resp.appartementList,
   facturePrix: setMoneyForm.value.facturePrix,
   facturePayed:resp.facturePayed
  });

   let table = JSON.parse(setMoneyForm.value.appartementList);
  let DivFacturePrix

  for(let i=0;i<table.length;i++){
     this.http.get<any>(this.URL+'Appartement'+'/'+table[i].appartementId).subscribe(async res =>{
           DivFacturePrix = (JSON.parse(table[i].appartementPercent) * setMoneyForm.value.facturePrix ) / 100 ;
          res.appartementFacturePrix = JSON.stringify(DivFacturePrix);
        await this.http.put<any>(this.URL+'Appartement'+'/'+table[i].appartementId,res).toPromise();
     });
   }
     setTimeout(async ()=>{
     await this.http.put<any>(this.URL+'Facture'+'/'+setMoneyForm.value.factureId,setMoneyForm.value).toPromise();
        window.location.reload();
     },1000);
     
  });
}

Add(){
  this.appartementList = this.factureForm.get('appartementList') as FormArray;
  this.appartementList.push(this.createItem());
  this.ControlsNumber++;
}
Delet(){
  if(this.ControlsNumber <=0){
      alert("you cant delete more");
  }else{
    this.appartementList = this.factureForm.get('appartementList') as FormArray;
    this.appartementList.controls.splice(-1);
    this.ControlsNumber--;
  }

}
AddApp(){
this.appartementListEdit = this.EditFacture.get('appartementList') as FormArray;
  this.appartementListEdit.push(this.createItem());
  this.ControlsNumber++;
}
DeletApp(){
  if(this.ControlsNumber <=0){
    alert("you cant delete more");
}else{
  this.appartementList = this.EditFacture.get('appartementList') as FormArray;
  this.appartementList.controls.splice(-1);
  this.ControlsNumber--;
}

}
async getListArchitectureData(){
  return await this.http.get<any>(this.URL+'Architecture').subscribe(res=>{
    this.listArchitectureData = res.data;
    // this.onChange(this.listArchitectureData.architectureId);
  });

}
  async onChange(event : any){
      return await this.http.get<any>(this.URL+'Appartement').subscribe(res=>{
      // this.listAppartementData = data.filter(x => x.architectureId == _architecture && x.appartementStatus == false );
      // console.log(this.appartementList);
      this.listAppartementData = res.data;
          for(let i=0;i<this.listAppartementData.length;i++){
            this.listAppartementData[i].architectureId = JSON.parse(this.listAppartementData[i].architectureId);
          }
          this.listAppartementData = this.listAppartementData.filter(x => x.architectureId.architectureId == event)
    });
   }
   async getListFactureData(){
     return await this.http.get<any>(this.URL+'Facture').subscribe(res=>{
      this.listData = res.data;
       for(let i=0;i<this.listData.length;i++){
        this.listData[i].architectureId = JSON.parse(this.listData[i].architectureId);
        this.listData[i].appartementList = JSON.parse(this.listData[i].appartementList)
      }
      var ArrayTable = this.listData[0].appartementList
     
      // console.log(this.listData[0].appartementList[0])
     });
   }

}
