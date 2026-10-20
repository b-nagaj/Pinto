/**
 * =============================================================================
 * @description: Application routes
 * =============================================================================
 */

import { Routes } from "@angular/router";

import { DashboardPage } from "./pages/dashboard-page/dashboard-page"
import { ResumePage } from "./pages/resume-page/resume-page"

export const routes: Routes = [
	{ path: 'about', component: DashboardPage },
	{ path: '', redirectTo: 'about', pathMatch: 'full' },
	{ path: 'resume', component: ResumePage },
];
