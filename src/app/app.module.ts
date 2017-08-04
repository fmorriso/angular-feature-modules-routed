import {BrowserModule}     from '@angular/platform-browser';
import {NgModule}          from '@angular/core';

import {AppRoutingModule}  from './app-routing.module';
import {AppComponent}      from './app.component';

/* feature modules */
import {HomeModule} from './home/home.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
	imports: [
		BrowserModule,
		HomeModule,
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
