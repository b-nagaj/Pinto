/**
 * =============================================================================
 * @description: Logic for the `app-silhouette` component
 * =============================================================================
 */

import { Component } from "@angular/core";

import { ImageModule } from 'primeng/image';
import { Subscription } from 'rxjs';

@Component({
	selector: "app-silhouette",
		imports: [
		ImageModule,
	],
	providers: [],
	templateUrl: "./silhouette.html",
	styleUrl: "./silhouette.scss",
})
export class Silhouette {
	constructor() {}
}
