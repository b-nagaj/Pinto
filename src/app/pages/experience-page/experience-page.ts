/**
 * =============================================================================
 * @description: Logic for the `app-experience-page` component
 * =============================================================================
 */

import { Component } from "@angular/core";

import { Timeline } from "../../components/timeline/timeline"
import { Job } from "../../types/job.model"

@Component({
	selector: "app-experience-page",
	imports: [
		Timeline,
	],
	templateUrl: "./experience-page.html",
	styleUrl: "./experience-page.scss",
})
export class ExperiencePage {
    public readonly jobs: Job[] = [
        {
            role: "Senior Software Engineer",
            company: "Tech Corp",
            startDate: new Date(2021, 6, 12),
            endDate: new Date(2022, 6, 12),
            description: ["Architected microservices...", "Mentored junior devs..."]
        },
        {
            role: "Full Stack Developer",
            company: "Startup Inc",
            startDate: new Date(2020, 6, 12),
            endDate: new Date(2021, 6, 11), // Fixed duplicate startDate
            description: ["Built the MVP from scratch..."]
        }
    ];
}
