import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { SupportChartData1} from '../../../demo/dashboard/dash-default/chart/support-chart-data-1';
import { SupportChartData2} from '../../../demo/dashboard/dash-default/chart/support-chart-data-2';
import { SeoChart1 } from '../../../demo/dashboard/dash-default/chart/seo-chart-1';
import { SeoChart2 } from '../../../demo/dashboard/dash-default/chart/seo-chart-2';
import { SeoChart3 } from '../../../demo/dashboard/dash-default/chart/seo-chart-3';
import { PowerCardChart1 } from '../../../demo/dashboard/dash-default/chart/power-card-chart-1';
import { PowerCardChart2 } from '../../../demo/dashboard/dash-default/chart/power-card-chart-2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-oppartement',
  templateUrl: './oppartement.component.html',
  styleUrls: ['./oppartement.component.scss']
})
export class OppartementComponent implements OnInit {
  URL = environment.BaseUrl;
  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public powerCardChartData1: any;
  public powerCardChartData2: any;
  verifAppartementStatus: boolean = false;
  listData: any;
  id: any;
  archID: any;
  idApp: any;
  ArchitectureData: any;
  appartementForm: FormGroup;
  ImageFile: File = null;
  DataById: any;
  EditData: any;
  image :any;
  editappartementForm: FormGroup;
  isPayed: boolean = false;
  TrueFalse: Object = [
    { name: "غير فارغ", value: true },
    { name: "أجوف", value: false },
  ];
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private _sanitizer: DomSanitizer
  ) {
    this.supportChartData1 = SupportChartData1.supportChartData;
    this.supportChartData2 = SupportChartData2.supportChartData;
    this.seoChartData1 = SeoChart1.seoChartData;
    this.seoChartData2 = SeoChart2.seoChartData;
    this.seoChartData3 = SeoChart3.seoChartData;
    this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    this.powerCardChartData2 = PowerCardChart2.powerCardChartData;
    this.getAppartementList();
    this.getListArchitecture();
    this.appartementForm = fb.group({
      appartementNumber: ["", Validators.required],
      appartementStatus: false,
      appartementPercent: "null",
      architectureId: ["", Validators.required],
      appartementFacturePrix: "null",
      appartementFactureImage: "null",
      appartementFacturePayed: false,
    });
    this.editappartementForm = fb.group({
      appartementId: ["", Validators.required],
      appartementNumber: ["", Validators.required],
      appartementStatus: ["", Validators.required],
      appartementPercent: "null",
      architectureId: ["", Validators.required],
      appartementFacturePrix: ["", Validators.required],
      appartementFactureImage: "null",
      appartementFacturePayed: false,
    });
  }
  async getById(id: any) {
    this.idApp = id;
  }
  async refuseFacturePayments() {
    await this.http
      .get<any>(this.URL+'Appartement' + '/' + this.idApp)
      .subscribe(async (res) => {
        res.appartementFacturePayed = false;
        await this.http
          .put<any>(this.URL+'Appartement' + '/' + this.idApp, res)
          .subscribe((res) => {
            window.location.reload();
          });
      });
  }
  async validFacturePayments() {
    await this.http
      .get<any>(this.URL+'Appartement' + '/' + this.idApp)
      .subscribe(async (res) => {
        res.appartementFacturePayed = true;
        await this.http
          .put<any>(this.URL+'Appartement' + '/' + this.idApp, res)
          .subscribe((res) => {
            window.location.reload();
          });
      });
  }

  VerifPayment(id: any) {
    this.http.get<any>(this.URL+'Appartement' + '/' + id).subscribe((data) => {
      let im = data.appartementFactureImage;
      let imageNameSplit = im.split(".");
      let imageNamewithoutExtension = imageNameSplit[0];
      return this.http.get<any>(this.URL+'Download/'+imageNamewithoutExtension).subscribe((response) =>{
        this.image = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + response.fileContents);
      });
  });
  }
  ngOnInit() {}
  async getAppartementList() {
    return await this.http.get<any>(this.URL+'Appartement').subscribe((response) => {
      this.listData = response.data;
      for (let i = 0; i < this.listData.length; i++) {
         this.listData[i].architectureId = JSON.parse(
           this.listData[i].architectureId
         );
       }
      // console.log('data',response)
    });
  }
  ReloadPage(){
    window.location.reload();
  }
  async getListArchitecture() {
    return this.http
      .get<any>(this.URL+'Architecture')
      .subscribe((response) => {
        this.ArchitectureData = response.data;
      });
  }
  async onChange(event: any) {
    return await this.http
      .get<any>(this.URL+'Architecture' + '/' + event)
      .subscribe((response) => {
        this.DataById = response.data;
        console.log(this.DataById)
      });
  }

  onSubmit(appartementForm: FormGroup) {
    this.onChange(appartementForm.value.architectureId);
    appartementForm.patchValue({
      architectureId: JSON.stringify(this.DataById),
    });

    this.http
      .post<any>(this.URL+'Appartement', appartementForm.value)
      .subscribe((data) => {
        window.location.reload();
      });
  }
  DeleteAppartement(id: any) {
    this.http.delete<any>(this.URL+'Appartement' + '/' + id).subscribe((data) => {
      window.location.reload();
    });
  }
  getAppartementById(id: any) {
    this.id = id;
    this.http.get<any>(this.URL+'Appartement' + '/' + this.id).subscribe((data) => {
      this.editappartementForm.setValue({
        appartementId: data.appartementId,
        appartementNumber: data.appartementNumber,
        appartementStatus: data.appartementStatus,
        appartementPercent: data.appartementPercent,
        architectureId: JSON.parse(data.architectureId).architectureId,
        appartementFacturePrix: data.appartementFacturePrix,
        appartementFactureImage: data.appartementFactureImage,
        appartementFacturePayed: data.appartementFacturePayed,
      });
    });
  }
  async onEdit(editappartementForm: FormGroup) {
    this.archID = editappartementForm.value.architectureId;
    await this.http
      .get<any>(this.URL+'Architecture' + '/' + this.archID)
      .subscribe(async (data) => {
        this.EditData = data;
        editappartementForm.patchValue({
          architectureId: JSON.stringify(this.EditData),
        });
        await this.http
          .put<any>(this.URL+'Appartement' + '/' + this.id, editappartementForm.value)
          .subscribe((data) => {});
        setTimeout(() => {
          window.location.reload();
        }, 800);
      });
  }
}
