/**
 * =============================================================================
 * @description: Application routes
 * =============================================================================
 */

import { Routes } from "@angular/router";

import { AboutPage } from "./pages/about-page/about-page"
import { SkillPage } from "./pages/skill-page/skill-page"
import { ExperiencePage } from "./pages/experience-page/experience-page"
import { ResumePage } from "./pages/resume-page/resume-page"
import { AdventurelandPage } from "./pages/adventureland-page/adventureland-page"

export const routes: Routes = [
	{ path: 'about', component: AboutPage },
	{ path: '', redirectTo: 'about', pathMatch: 'full' },
	{ path: 'skills', component: SkillPage },
	{ path: 'experience', component: ExperiencePage },
	{ path: 'resume', component: ResumePage },
	{ path: 'adventureland', component: AdventurelandPage }
];
