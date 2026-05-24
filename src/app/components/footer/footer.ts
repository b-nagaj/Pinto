/**
 * =============================================================================
 * @description Logic for the 'app-footer' component
 * =============================================================================
 */
import { Component } from "@angular/core";

@Component({
	selector: "app-footer",
	imports: [],
	templateUrl: "./footer.html",
	styleUrl: "./footer.scss",
})
export class Footer {
	public readonly copyleftIcon: string = "assets/icons/copyleftIcon.svg"

	public currentYear: number = new Date().getFullYear();
}
