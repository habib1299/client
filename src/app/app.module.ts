import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './theme/shared/shared.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';

import { ToggleFullScreenDirective } from './theme/shared/full-screen/toggle-full-screen';

/* Menu Items */
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { SuperAdminComponent } from './MyFolderwork/SuperAdmin/super-admin/super-admin.component';
import { HttpInterceptorProviders } from './CORE';
import { AuthGuard } from './CORE/AuthGuard';
import { OofficerComponent } from './MyFolderwork/Officer/oofficer/oofficer.component';
import { OfficernavCollapseComponent } from './theme/layout/admin/navigation/officernavigation/officernav-collapse/officernav-collapse.component';
import { OfficernavGroupComponent } from './theme/layout/admin/navigation/officernavigation/officernav-group/officernav-group.component';
import { OfficernavItemComponent } from './theme/layout/admin/navigation/officernavigation/officernav-item/officernav-item.component';
import { OfficernavContentComponent } from './theme/layout/admin/navigation/officernavigation/officernav-content/officernav-content.component';
import { OfficerNavigationComponent } from './theme/layout/admin/navigation/officernavigation/officer-navigation/officer-navigation.component';
import { OfficerNavigationItem } from './theme/layout/admin/navigation/officernavigation';
import { RedirectionServices } from './CORE/redirection.service';
import { NormaluserComponent } from './MyFolderwork/User/normaluser/normaluser.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    NormaluserComponent,
    NavigationComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ConfigurationComponent,
    ToggleFullScreenDirective,
    SuperAdminComponent,
    OofficerComponent,
    OfficernavCollapseComponent,
    OfficernavGroupComponent,
    OfficernavItemComponent,
    OfficernavContentComponent,
    OfficerNavigationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule
  ],
  providers: [RedirectionServices,NavigationItem,OfficerNavigationItem,HttpInterceptorProviders,AuthGuard],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  
})
export class AppModule { }
