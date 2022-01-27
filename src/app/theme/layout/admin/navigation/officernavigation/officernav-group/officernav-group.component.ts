import {Component, Input, NgZone, OnInit} from '@angular/core';
import { NextConfig } from 'src/app/app-config';
import {Location} from '@angular/common';
import { OfficerNavigationItem } from '../../officernavigation';

@Component({
  selector: 'app-officernav-group',
  templateUrl: './officernav-group.component.html',
  styleUrls: ['./officernav-group.component.scss']
})
export class OfficernavGroupComponent implements OnInit {
  @Input() item: OfficerNavigationItem;
  @Input() layout1: boolean = false;
  @Input() activeId: any;
  public flatConfig: any;

  constructor(private zone: NgZone, private location: Location) {
    this.flatConfig = NextConfig.config;
  }

  ngOnInit() {
    // at reload time active and trigger link
    let current_url = this.location.path();
    if (this.location['_baseHref']) {
      current_url = this.location['_baseHref'] + this.location.path();
    }
    const link = "a.nav-link[ href='" + current_url + "' ]";
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const up_parent = parent.parentElement.parentElement;
      const last_parent = up_parent.parentElement;
      if (parent.classList.contains('pcoded-hasmenu')) {
        if (this.flatConfig['layout'] === 'vertical') {
          parent.classList.add('pcoded-trigger');
        }
        parent.classList.add('active');
      } else if(up_parent.classList.contains('pcoded-hasmenu')) {
        if (this.flatConfig['layout'] === 'vertical') {
          up_parent.classList.add('pcoded-trigger');
        }
        up_parent.classList.add('active');
      } else if (last_parent.classList.contains('pcoded-hasmenu')) {
        if (this.flatConfig['layout'] === 'vertical') {
          last_parent.classList.add('pcoded-trigger');
        }
        last_parent.classList.add('active');
      }
    }
  }


}
