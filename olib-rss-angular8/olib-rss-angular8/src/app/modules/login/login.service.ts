import { Injectable }         from '@angular/core';
import { Router }             from '@angular/router';
import { ApiService }         from '../../services/api/api.service';
import { Login }              from './login.enum';
import { UserModel }          from './user.model';

@Injectable({
    providedIn: 'root'
})
export class LoginService{
  
  private storage:Storage = localStorage; 
  private userKey ="CURRENTUSER";
  
  constructor(
    private apiService : ApiService,
    private router : Router
  ){ 
  }

  login(user){
    return this.apiService.post(Login.LOGIN,user);
  }

  getCurrentUserName(){
    let userStr = this.storage.getItem(this.userKey);
    if(userStr){
      let userModel:UserModel = JSON.parse(userStr);
      return userModel.userName;
    }
    return "";
  }
  
  hasRole(role:string):boolean{
    let userStr = this.storage.getItem(this.userKey);
    if(userStr){
      let userModel:UserModel = JSON.parse(userStr);
      for(let i in userModel.authorityList){
        if(userModel.authorityList[i].authority === role){
          return true;
        }
      }
    } 
    return false;
  }

  saveUser(user){
    this.storage.setItem(this.userKey,user);
  }
  saveToken(token){
    this.apiService.saveToken(token);
  }

  getToken(){
    return this.apiService.getToken();
  }

  removeToken(){
    return this.apiService.removeToken();
  }

  signup(user){
   return this.apiService.post(Login.LOGIN,user); 
  }
   
  logout() {
    return this.apiService.post(Login.LOGOUT,{})
    .subscribe(res=>{
      this.storage.removeItem(this.userKey);
      this.apiService.removeToken();
    });
  }
}
