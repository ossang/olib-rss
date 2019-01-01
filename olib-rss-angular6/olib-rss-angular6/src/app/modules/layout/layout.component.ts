import { Component }                        from '@angular/core';
import { BreakpointObserver, Breakpoints }  from '@angular/cdk/layout';
import { Observable }                       from 'rxjs';
import { map }                              from 'rxjs/operators';
import { LoginService }                     from '../login/login.service';
import { MatDialog }                        from '@angular/material';
import { LayoutDialogComponent }            from './layout-dialog/layout-dialog.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent{

  loginUserName;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(
    private breakpointObserver: BreakpointObserver,
    private loginService : LoginService,
    public dialog: MatDialog
  ) {
    this.loginUserName = this.loginService.getCurrentUserName();
  }

  logout() {
    this.loginService.logout();
  }

  upload(){
    // console.log("upload");
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(LayoutDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}
