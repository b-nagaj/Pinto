/**
 * =============================================================================
 * @description: Application routes
 * =============================================================================
 */

import { Routes } from "@angular/router";

import { AboutPage } from "./pages/about-page/about-page"
import { ResumePage } from "./pages/resume-page/resume-page"

export const routes: Routes = [
	{ path: 'about', component: AboutPage },
	{ path: '', redirectTo: 'about', pathMatch: 'full' },
	{ path: 'resume', component: ResumePage },
];
