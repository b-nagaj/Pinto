/**
 * =============================================================================
 * @description: Styling for the `app-dashboard-page` component
 * =============================================================================
 */

import { Component } from "@angular/core";

import { ButtonModule } from 'primeng/button';

@Component({
	selector: "app-dashboard-page",
	imports: [ButtonModule],
	templateUrl: "./dashboard-page.html",
	styleUrl: "./dashboard-page.scss",
})
export class DashboardPage {}
