/**
 * =============================================================================
 * @description: Styling for the `app-resume-page` component
 * =============================================================================
 */

import { Component } from "@angular/core";

import { Resume } from "../../components/resume/resume"

@Component({
	selector: "app-resume-page",
	imports: [Resume],
	templateUrl: "./resume-page.html",
	styleUrl: "./resume-page.scss",
	standalone: true
})
export class ResumePage {}
