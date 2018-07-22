import { Injectable }                           from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams }  from '@angular/common/http';
import { Router }                               from '@angular/router';
import { Observable }                           from 'rxjs';
import 'rxjs/add/operator/catch';


@Injectable()
export class ApiService {

    private storage:Storage = localStorage; 
    private tokenKey = "JWTTOKEN";

    constructor(
        private http: HttpClient,
        private router:Router
    ) {}

    saveToken(token:string){
        this.storage.setItem(this.tokenKey, token);
      }
    removeToken() {
        this.storage.removeItem(this.tokenKey);
    }
    getToken():string{
        return this.storage.getItem(this.tokenKey);
    }

    getHeaders():HttpHeaders {
        let headers = new HttpHeaders();
        let token = this.getToken();
        headers = headers.append('Content-Type', 'application/json');
        if (token !== null) {
            headers = headers.append("Authorization", "Bearer "+token);
        }
        return headers;
    }

    get(url:string, urlParams?:HttpParams):Observable<any>{
        let me = this;
        return this.http.get(url, {headers:this.getHeaders(),  params:urlParams} )
            .catch(function(error:any){
                if (error.status === 401 || error.status === 403){
                    me.router.navigate(['/login']);
                }
                return Observable.throw(error || 'Server error')
            });
    }

    post(url:string, body:Object):Observable<any>{
        let me = this;
        return this.http.post(url, JSON.stringify(body), { headers:this.getHeaders()})
            .catch(function(error:any){
                if (error.status === 401){
                    me.router.navigate(['/login']);
                }
                return Observable.throw(error || 'Server error')
            });
    }

    put(url:string, body:Object):Observable<any>{
        let me = this;
        return this.http.put(url, JSON.stringify(body), { headers:this.getHeaders()})
            .catch(function(error:any){
                if (error.status === 401){
                    me.router.navigate(['/login']);
                }
                return Observable.throw(error || 'Server error')
            });
    }

    delete(url:string):Observable<any>{
        let me = this;
        return this.http.delete(url, { headers:this.getHeaders()})
            .catch(function(error:any){
                if (error.status === 401){
                    me.router.navigate(['/login']);
                }
                return Observable.throw(error || 'Server error')
            });
    }

}