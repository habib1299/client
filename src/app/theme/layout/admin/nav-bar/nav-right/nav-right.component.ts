import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavRightComponent implements OnInit {

  constructor(private router:Router) { }

  logout(){
    localStorage.removeItem('JWT_Token');
   
    this.router.navigate(['auth/signin']);
  }
  ngOnInit() { }
}
