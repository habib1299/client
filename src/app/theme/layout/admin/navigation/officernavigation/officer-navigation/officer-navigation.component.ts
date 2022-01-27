import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NextConfig } from 'src/app/app-config';


@Component({
  selector: 'app-officer-navigation',
  templateUrl: './officer-navigation.component.html',
  styleUrls: ['./officer-navigation.component.scss']
})
export class OfficerNavigationComponent implements OnInit {
  public windowWidth: number;
  public flatConfig: any;
  @Output() onNavMobCollapse = new EventEmitter();

  constructor() {
    this.flatConfig = NextConfig.config;
    this.windowWidth = window.innerWidth;
  }

  ngOnInit() { }

  navMobCollapse() {
    if (this.windowWidth < 992) {
      this.onNavMobCollapse.emit();
    }
  }
}
