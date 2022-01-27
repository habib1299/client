import {Injectable} from '@angular/core';

export interface OfficerNavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: OfficerNavigation[];
}

export interface OfficerNavigation extends OfficerNavigationItem {
  children?: OfficerNavigationItem[];
}

const OfficerNavigationItems = [

  {
    id: 'chart-maps',
    title: 'الإدارة العامة',
    type: 'group',
    icon: 'feather icon-pie-chart',
    children: [
      {
        id: 'charts',
        title: 'إدارة العمارة',
        type: 'item',
        url: '/officer/architecture',
        classes: 'nav-item',
        icon: 'feather icon-pie-chart'
      },
      {
        id: 'maps',
        title: 'إدارة الشقة',
        type: 'item',
        url: '/officer/appartement',
        classes: 'nav-item',
        icon: 'feather icon-map'
      },
      {
        id: 'sample-page',
        title: 'إدارة العميل',
        type: 'item',
        url: '/officer/user',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
    ]
  },
  {
    id: 'forms',
    title: 'الفاتورة',
    type: 'group',
    icon: 'feather icon-layout',
    children: [
   
      {
        id: 'forms-element',
        title: 'إدارة الفاتورة',
        type: 'item',
        url: '/officer/facture',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
 
    ]
  },
];
@Injectable()
export class OfficerNavigationItem {
  public get() {
    return OfficerNavigationItems;
  }
}

