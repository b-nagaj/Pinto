/**
 * =============================================================================
 * @description: Logic for the root app component
 * =============================================================================
 */

import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { DashboardPage } from "./pages/dashboard-page/dashboard-page"

@Component({
    selector: "app-root",
	standalone: true,
	imports: [
		DashboardPage
		/*RouterOutlet*/
	],
	templateUrl: "./app.html",
	styleUrl: "./app.scss",
})
export class App {
	protected readonly title = signal("pinto");
}
