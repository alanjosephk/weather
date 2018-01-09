import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HttpModule } from '@angular/http';
import HomeService from './home/home.service';
import AppService from './app.service';


const appRoutes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

@NgModule({
	declarations: [
	AppComponent,
	HomeComponent,
	AboutComponent
	],
	imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes),
	HttpModule,
	],
	providers: [HomeService,AppService],
	bootstrap: [AppComponent]
})
export class AppModule { }