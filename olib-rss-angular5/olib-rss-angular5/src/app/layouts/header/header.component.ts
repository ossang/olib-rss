import { Component, OnInit }  from '@angular/core';
import { LoginService }       from '../../services/login/login.service';
import { RoleType }           from '../../enums/role-type.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginUserName;
  isAdmin : boolean;

  constructor(
    private loginService : LoginService
  ) { 
    this.loginUserName = this.loginService.getCurrentUserName();
    this.isAdmin = this.loginService.hasRole(RoleType.ROLE_ADMIN);

  }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout();
  }
}
