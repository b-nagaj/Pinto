/**
 * =============================================================================
 * @description: Logic for the `app-skill-card` component
 * =============================================================================
 */

import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common"

@Component({
	selector: "app-skill-card",
	imports: [CommonModule],
	templateUrl: "./skill-card.html",
	styleUrl: "./skill-card.scss",
	standalone: true
})
export class SkillCard {
	@Input({ required: true }) name!: string;
	@Input({ required: true }) icon!: string;
}
