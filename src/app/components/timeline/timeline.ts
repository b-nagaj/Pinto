/**
 * =============================================================================
 * @brief logic for the 'app-timeline' component
 * =============================================================================
 */


import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Job } from "../../types/job.model"

@Component({
	selector: "app-timeline",
	imports: [CommonModule],
	templateUrl: "./timeline.html",
	styleUrl: "./timeline.scss",
	standalone: true
})
export class Timeline {
	@Input() jobs: Job[] = [];
}
