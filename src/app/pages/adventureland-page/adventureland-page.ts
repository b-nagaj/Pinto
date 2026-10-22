/**
 * =============================================================================
 * @description: Logic for the `app-adventureland-page` component
 * =============================================================================
 */

import { Component } from "@angular/core";

import { AdventurelandRegistrationForm } from "../../components/adventureland-registration-form/adventureland-registration-form"

@Component({
	selector: "app-adventureland-page",
	imports: [AdventurelandRegistrationForm],
	templateUrl: "./adventureland-page.html",
	styleUrl: "./adventureland-page.scss",
})
export class AdventurelandPage {}
