/**
 * =============================================================================
 * @description: Logic for the `app-about-page` component
 * =============================================================================
 */

import { Component } from "@angular/core";

import { DividerModule } from 'primeng/divider';

import { Silhouette } from "../../components/silhouette/silhouette"

@Component({
	selector: "app-about-page",
	imports: [
		DividerModule,
		Silhouette
	],
	templateUrl: "./about-page.html",
	styleUrl: "./about-page.scss",
})
export class AboutPage {}
