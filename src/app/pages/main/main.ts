import { Component } from '@angular/core';

import * as momentJS from 'moment';
import 'moment/locale/ru';

import * as _ from 'lodash';
import {SettingsService} from '../../services/settings.service';
import {TranslateService} from '@ngx-translate/core';

class TForm {constructor(
    public email: string,
    public pass: string
){}}

@Component({
    selector: 'main-page',
    templateUrl: './main.html',
    styleUrls: ['./main.scss']
})
export class Main{
   
    model = new TForm('email@gmail.com','12345678');
    
    settingsService:any;
    tr:any;
    constructor(
        private sttingsService:SettingsService,
        translate: TranslateService
    ) {
        this.settingsService=sttingsService;
        this.tr=translate;
    }

    //moment.js
    mdl:any='';
    dt:any=momentJS().format('DD.MM.YYYY');
    objForLodash:any={
        f1:{
            subF1:{
                SubSubF1:'nested value'
            }
        }
    };

    //lodash
    clonedObjByLodash:any=_.cloneDeep(this.objForLodash);
  
    //def object
    loadedSettings:any={
		id:0,
		name:'',
		age:0,
		visibility:false
    };

    //ajax call
    LoadSettings(){
        this.settingsService.getSettings()
        .subscribe(
            data=>{
                this.loadedSettings=data;
            },
            (error) =>  {
                console.log(error);
            }
        );
    }

    //set language
    setLang(lngCode){
        this.tr.use(lngCode);
    }
}
