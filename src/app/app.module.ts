import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HttpModule } from '@angular/http';
import AppService from './app.service';

const appRoutes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

@NgModule({
	declarations: [
	AppComponent,
	],
	imports: [
	BrowserModule,
	RouterModule.forRoot(appRoutes),
	HttpModule,
	],
	providers: [AppService],
	bootstrap: [AppComponent]
})

export class AppModule { }