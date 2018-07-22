import { Component, OnInit }                    from '@angular/core';
import { FormBuilder, FormGroup, Validators }   from '@angular/forms';
import { Router }                               from '@angular/router';

import { DisplayMessage }                       from '../../models/display-message';
import { LoginService }                         from '../../services/login/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  notification: DisplayMessage;
 
  constructor(
    private loginService : LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      repassword: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
    });
  }

  onSubmit() {
    if(this.form.value.password != this.form.value.repassword){
      this.notification = { msgType: 'error', msgBody: "password error" };
      return;
    }
    
    this.notification = undefined;
    this.submitted = true;

    this.loginService.signup(this.form.value)
    .subscribe(data => {
      this.router.navigate(['/login']);
    },
    error => {
      this.submitted = false;
      this.notification = { msgType: 'error', msgBody: error.statusText };
    });
  }
}
