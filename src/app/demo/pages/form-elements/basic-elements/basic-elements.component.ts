import { Component, OnInit } from '@angular/core';
import { SupportChartData1} from '../../../dashboard/dash-default/chart/support-chart-data-1';
import { SupportChartData2} from '../../../dashboard/dash-default/chart/support-chart-data-2';
import { SeoChart1 } from '../../../dashboard/dash-default/chart/seo-chart-1';
import { SeoChart2 } from '../../../dashboard/dash-default/chart/seo-chart-2';
import { SeoChart3 } from '../../../dashboard/dash-default/chart/seo-chart-3';
import { PowerCardChart1 } from '../../../dashboard/dash-default/chart/power-card-chart-1';
import { PowerCardChart2 } from '../../../dashboard/dash-default/chart/power-card-chart-2';

@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.scss']
})
export class BasicElementsComponent implements OnInit {

  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public powerCardChartData1: any;
  public powerCardChartData2: any;
    listData: any;
  constructor() {
    this.supportChartData1 = SupportChartData1.supportChartData;
    this.supportChartData2 = SupportChartData2.supportChartData;
    this.seoChartData1 = SeoChart1.seoChartData;
    this.seoChartData2 = SeoChart2.seoChartData;
    this.seoChartData3 = SeoChart3.seoChartData;
    this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    this.powerCardChartData2 = PowerCardChart2.powerCardChartData;
  }

  ngOnInit() {
    this.listData = [
      
      {"id":"1","nom":"habib","phone":"53859826","email":"habibharb8@gmail.com"},
      {"id":"1","nom":"habib","phone":"53859826","email":"habibharb8@gmail.com"},
      {"id":"1","nom":"habib","phone":"53859826","email":"habibharb8@gmail.com"},
      {"id":"1","nom":"habib","phone":"53859826","email":"habibharb8@gmail.com"},
      {"id":"1","nom":"habib","phone":"53859826","email":"habibharb8@gmail.com"},
      {"id":"1","nom":"habib","phone":"53859826","email":"habibharb8@gmail.com"},
      {"id":"1","nom":"habib","phone":"53859826","email":"habibharb8@gmail.com"},
      {"id":"1","nom":"habib","phone":"53859826","email":"habibharb8@gmail.com"},
      {"id":"1","nom":"habib","phone":"53859826","email":"habibharb8@gmail.com"},
      {"id":"1","nom":"habib","phone":"53859826","email":"habibharb8@gmail.com"}
       ];
  }

}
