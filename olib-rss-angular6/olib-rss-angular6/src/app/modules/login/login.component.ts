import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';
import { LoginService }       from './login.service';
import { NgForm }             from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  notification;
  hide = true;
  
  constructor(
    private loginService : LoginService,
    private router: Router,
  ) {

  }

  ngOnInit() {
  }

  onSubmit(loginForm:NgForm) {
    this.notification = '';
    this.submitted = true;

    this.loginService.login(loginForm.value)
    .subscribe(data => {
      this.loginService.saveUser(JSON.stringify(data));
      this.loginService.saveToken(data.accessToken);
      this.router.navigate(['/']);
    },
    error => {
      this.submitted = false;
      this.notification = { msgType: 'error', msgBody: 'Incorrect username or password.' };
    });

  }


}
