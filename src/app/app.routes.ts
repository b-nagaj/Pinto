/**
 * =============================================================================
 * @description: Application routes
 * =============================================================================
 */

import { Routes } from "@angular/router";

import { DashboardPage } from "./pages/dashboard-page/dashboard-page"

export const routes: Routes = [
	{ path: 'dashboard', component: DashboardPage},
	{ path: '', redirectTo: 'dasboard', pathMatch: 'full' }
];
