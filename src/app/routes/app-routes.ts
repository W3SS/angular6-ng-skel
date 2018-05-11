import { ModuleWithProviders }      from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

//pages
import { AppComponent }             from '../app.component';

//pages components
import {Main}                       from '../pages/main/main';
import {Page1}                      from "../pages/page1/page1";
import {Page2}                      from "../pages/page2/page2";
import {Subpage1}                   from "../pages/subpage1/subpage1";
import {Subpage2}                   from "../pages/subpage2/subpage2";

//Маршруты
export const router: Routes = [
    { path: 'main',         component: Main},
    { path: 'page1/:id',    component: Page1},
    { 
        path: 'page2',        
        component: Page2,
        children:[
            { path: '', redirectTo: 'subpage1',  pathMatch: 'full' },
            /*
            { path: 'subpage1',     component: Subpage1},
            { path: 'subpage2',     component: Subpage2}
            */
            { path: 'subpage1',     component: Subpage1, outlet:'subpageview'},
            { path: 'subpage2',     component: Subpage2, outlet:'subpageview'}
        ]
    },
    /*
    { path: 'settngs',      component: SettngsPage,
        children:
            [
                { path: '',         component: SettngsShopPage,         outlet:'settngswindow' },
                { path: 'shop',     component: SettngsShopPage,         outlet:'settngswindow' },
                { path: 'menu',     component: SettngsMenuPage,         outlet:'settngswindow' },
                { path: 'categ',    component: SettngsCategPage,        outlet:'settngswindow' },
                { path: 'products', component: SettngsProductsPage,     outlet:'settngswindow' },
                { path: 'ads',      component: SettngsAdsPage,          outlet:'settngswindow' }
            ]
    },
    { path: 'ext',          redirectTo: '/auth', pathMatch: 'full'},
    { path: 'auth',         component: AuthPage},
    { path: 'registration', component: RegistrationPage},


    { path: '',             redirectTo: '/auth', pathMatch: 'full'},
    { path: '**',           component: AppComponent }
    */
    //{ path: '**',           component: AppComponent }
    //{ path: '**',           component: AppComponent }
    { path: '',             redirectTo: '/main', pathMatch: 'full'},
];
export const routes :  ModuleWithProviders = RouterModule.forRoot(router, {useHash: false});