import { Component, OnInit }                    from '@angular/core';
import { FormBuilder, FormGroup, Validators }   from '@angular/forms';
import { Router, ActivatedRoute }               from '@angular/router';

import { DisplayMessage }                       from '../../models/display-message';
import { LoginService }                         from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  notification: DisplayMessage;

  constructor(
    private loginService : LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
    });
  }

  onSubmit() {
    this.notification = undefined;
    this.submitted = true;

    this.loginService.login(this.form.value)
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
