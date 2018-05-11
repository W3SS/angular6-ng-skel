import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
import { ajax } from 'rxjs/ajax';
import {map,catchError} from 'rxjs/operators';

@Injectable()
export class SettingsService {
  
    urlSrv:string="";

    constructor(private http: Http) {
        this.urlSrv='http://localhost:4210/api/';
    }


    //Получение настроек
    getSettings()
    {
        return ajax(this.urlSrv+'getsettings').pipe(
            map(res => {
                if (!res.response) {
                    throw new Error('Value expected!');
                }
                return res.response;
            }),
            catchError(err => ([]))
        );
    }
}
