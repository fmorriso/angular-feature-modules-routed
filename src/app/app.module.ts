import {BrowserModule}     from '@angular/platform-browser';
import {NgModule}          from '@angular/core';

import {AppRoutingModule}  from './app-routing.module';
import {AppComponent}      from './app.component';

import { NavigationComponent } from './navigation/navigation.component';

/* feature modules that perform their own routing */
import {HomeModule}            from './home/home.module';
import {AboutModule}           from './about/about.module';
import {ContactUsModule}       from './contact-us/contact-us.module';

/* Make sure the feature MODULE names, not the feature COMPONENT names, are listed in the imports */
/* Make sure AppRoutingModule is LAST inside imports array */
@NgModule({
	imports: [
		BrowserModule,

		HomeModule,
		AboutModule,
		ContactUsModule,

		AppRoutingModule
	],
	declarations: [
		AppComponent,
		NavigationComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
