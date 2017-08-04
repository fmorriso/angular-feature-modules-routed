import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
Note: the top-level routes list defined here is deliberately very small because
      each routeable feature module declares and handles its own routing.
*/

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

const routeConfig = {enableTracing: true};

@NgModule({
  imports: [RouterModule.forRoot(routes, routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
