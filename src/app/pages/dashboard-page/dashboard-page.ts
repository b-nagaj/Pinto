/**
 * =============================================================================
 * @description: Logic for the `app-dashboard-page` component
 * =============================================================================
 */

import { Component } from "@angular/core";

import { DividerModule } from 'primeng/divider';

import { About } from "../../components/about/about"

@Component({
	selector: "app-dashboard-page",
	imports: [
		DividerModule,
		About
	],
	templateUrl: "./dashboard-page.html",
	styleUrl: "./dashboard-page.scss",
})
export class DashboardPage {}
