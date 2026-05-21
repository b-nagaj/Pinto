/**
 * =============================================================================
 * @description: Application routes
 * =============================================================================
 */

import { Routes } from "@angular/router";

import { DashboardPage } from "./pages/dashboard-page/dashboard-page"
import { ResumePage } from "./pages/resume-page/resume-page"

export const routes: Routes = [
	{ path: 'dashboard', component: DashboardPage },
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'resume', component: ResumePage },
];
