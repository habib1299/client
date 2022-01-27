import {Injectable} from '@angular/core';

export interface NavigationItem {
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
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'الإدارة',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'إدارة الموظف',
        type: 'item',
        url: '/superadmin/officer',
        classes: 'nav-item',
        icon: 'feather icon-home'
      }
    ]
  },
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
        url: '/superadmin/architecture',
        classes: 'nav-item',
        icon: 'feather icon-pie-chart'
      },
      {
        id: 'maps',
        title: 'إدارة الشقة',
        type: 'item',
        url: '/superadmin/appartement',
        classes: 'nav-item',
        icon: 'feather icon-map'
      },
      {
        id: 'sample-page',
        title: 'إدارة العميل',
        type: 'item',
        url: '/superadmin/user',
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
        url: '/superadmin/facture',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
 
    ]
  },
];
@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}


  // {
  //   id: 'pages',
  //   title: 'Pages',
  //   type: 'group',
  //   icon: 'feather icon-file-text',
  //   children: [
  //     {
  //       id: 'auth',
  //       title: 'Authentication',
  //       type: 'collapse',
  //       icon: 'feather icon-lock',
  //       children: [
  //         {
  //           id: 'signup',
  //           title: 'االإشتراك ',
  //           type: 'item',
  //           url: '/auth/signup',
  //           target: true,
  //           breadcrumbs: false
  //         },
  //         {
  //           id: 'signin',
  //           title: 'تسجيل الدخول',
  //           type: 'item',
  //           url: '/auth/signin',
  //           target: true,
  //           breadcrumbs: false
  //         }
  //       ]
  //     }
  //   ]
  // },