import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

/*
Note: the top-level routes list defined here is deliberately very small because
      each routable feature module declares and handles its own routing.
*/
const routes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'}
];

const routeConfig = {enableTracing: true};

@NgModule({
	imports: [RouterModule.forRoot(routes, routeConfig)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
