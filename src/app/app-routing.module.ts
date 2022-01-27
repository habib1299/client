import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './CORE/AuthGuard';
import { OofficerComponent } from './MyFolderwork/Officer/oofficer/oofficer.component';
import { SuperAdminComponent } from './MyFolderwork/SuperAdmin/super-admin/super-admin.component';
import { NormaluserComponent } from './MyFolderwork/User/normaluser/normaluser.component';
import {AuthComponent} from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(module => module.AuthenticationModule)
      }
    ]
  },
  {
    path:'',
    component: NormaluserComponent,
    children:[
      {
        path:'normaluser/payments',
        loadChildren: () => import('./MyFolderwork/User/userinterface/userinterfece.module').then(m => m.UserinterfaceModule)
      },
      {
        path:'normaluser/verifypayments',
        loadChildren: () => import('./MyFolderwork/User/verifypaymentuser/verifypaymentuser.module').then(m => m.VerifypaymentuserModule)
      }
    ],canActivate:[AuthGuard]
  },
  {
    path:'',
    component: OofficerComponent,
    children: [
      {
        path: 'officer/architecture',
        loadChildren: () => import('./MyFolderwork/Officer/oarchitecture/oarchitecture.module').then(m => m.OarchitectureModule)
      },
      {
        path: 'officer/appartement',
        loadChildren: () => import('./MyFolderwork/Officer/oppartement/oappartement.module').then(m => m.OppartementModule)
      },
      {
        path: 'officer/user',
        loadChildren: () => import('./MyFolderwork/Officer/ouser/ouser.module').then(m => m.OuserModule)
      },
      {
        path: 'officer/facture',
        loadChildren: () => import('./MyFolderwork/Officer/ofacture/ofacture.module').then(m => m.OfactureModule)
      },
    ],canActivate:[AuthGuard]
  },
  {
    path:'',
    component: SuperAdminComponent,
    children: [
      {
        path: 'superadmin/architecture',
        loadChildren: () => import('./MyFolderwork/SuperAdmin/architecture/architecture.module').then(m => m.ArchitectureModule)
      },
      {
        path: 'superadmin/appartement',
        loadChildren: () => import('./MyFolderwork/SuperAdmin/appartement/appartement.module').then(m => m.AppartementModule)
      },
      {
        path: 'superadmin/officer',
        loadChildren: () => import('./MyFolderwork/SuperAdmin/officer/officer.module').then(m => m.OfficerModule)
      },
      {
        path: 'superadmin/user',
        loadChildren: () => import('./MyFolderwork/SuperAdmin/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'superadmin/facture',
        loadChildren: () => import('./MyFolderwork/SuperAdmin/facture/facture.module').then(m => m.FactureModule)
      },
    ],canActivate:[AuthGuard]
  }


  // {
  //   path: '',
  //   component: AdminComponent,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: () => import('./demo/dashboard/dashboard.module').then(module => module.DashboardModule)
  //     },
  //     {
  //       path: 'layout',
  //       loadChildren: () => import('./demo/pages/layout/layout.module').then(module => module.LayoutModule)
  //     },
  //     {
  //       path: 'basic',
  //       loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(module => module.UiBasicModule)
  //     },
  //     {
  //       path: 'forms',
  //       loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then(module => module.FormElementsModule)
  //     },
  //     {
  //       path: 'tbl-bootstrap',
  //       loadChildren: () => import('./demo/pages/tables/tbl-bootstrap/tbl-bootstrap.module').then(module => module.TblBootstrapModule)
  //     },
  //     {
  //       path: 'charts',
  //       loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then(module => module.CoreChartModule)
  //     },
  //     {
  //       path: 'maps',
  //       loadChildren: () => import('./demo/pages/core-maps/core-maps.module').then(module => module.CoreMapsModule)
  //     },
  //     {
  //       path: 'sample-page',
  //       loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
  //     }
  //   ]
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
