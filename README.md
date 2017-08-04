# angular-feature-modules-routed

## How the app was scafollded

ng new angular-feature-modules-routed --routing -style=scss

## How the App was "fleshed out"

```
ng generate component navigation

ng generate module Home --routing
manuall add HomeModule to the imports[] of app.module.ts

ng generate component Home
(should automatically update home.routing-module.ts
```

Example feature routing (home-routing.module.ts)

```
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }        from './home.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
```

Example feature module (home.module.ts)

```
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }        from './home.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

```

Example `app.module.ts` that imports routable feature modules:

```
import {BrowserModule}     from '@angular/platform-browser';
import {NgModule}          from '@angular/core';

import {AppRoutingModule}      from './app-routing.module';
import {AppComponent}          from './app.component';

import { NavigationComponent } from './navigation/navigation.component';

/* feature modules that perform their own routing */
import {HomeModule}            from './home/home.module';
import {AboutModule}           from './about/about.module';

/* Make sure the feature MODULE names, not the feature COMPONENT names, are listed in the imports */
/* Make sure AppRoutingModule is LAST inside imports array */
@NgModule({
    imports: [
        BrowserModule,
	    
        HomeModule,
        AboutModule,
        
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
```

## Anular-CLI "stuff"

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
