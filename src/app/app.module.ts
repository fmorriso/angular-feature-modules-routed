import {BrowserModule}     from '@angular/platform-browser';
import {NgModule}          from '@angular/core';

import {AppRoutingModule}  from './app-routing.module';
import {AppComponent}      from './app.component';

import { NavigationComponent } from './navigation/navigation.component';

/* feature modules */
import {HomeModule} from './home/home.module';
import {AboutModule} from './about/about.module';

@NgModule({
	imports: [
		BrowserModule,
		HomeModule,
		AppRoutingModule,
		AboutModule
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
