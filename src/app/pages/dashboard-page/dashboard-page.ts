/**
 * =============================================================================
 * @description: Logic for the `app-dashboard-page` component
 * =============================================================================
 */

import { Component } from "@angular/core";

import { DividerModule } from 'primeng/divider';

import { Silhouette } from "../../components/silhouette/silhouette"

@Component({
	selector: "app-dashboard-page",
	imports: [
		DividerModule,
		Silhouette
	],
	templateUrl: "./dashboard-page.html",
	styleUrl: "./dashboard-page.scss",
})
export class DashboardPage {}
