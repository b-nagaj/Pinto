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
            role: "Software Engineer II: R&D",
            company: "Keysight Technologies, Inc.",
            startDate: new Date(2025, 4, 1),
            endDate: new Date(),
            description: [
                "Lead development on the Keysight Smart Connected Products Telemetry platform initiative",
                 "Migrate a fleet of legacy desktop software applications to the Electron desktop framework",
                 "Oversee project architecture & diagramming efforts",
                 "Mentor junior developers through pair programming, coaching, and code reviews",
                 "Contribute a wealth of engineering documentation to shared team workspaces"
             ]
        },
        {
            role: "Specialist, Software Engineer",
            company: "Nationwide Mutual Insurance Co.",
            startDate: new Date(2024, 5, 1),
            endDate: new Date(2025, 4, 1),
            description: [
                "Developed the Nationwide Partnership Portal's Java backend, Angular.js frontend, and Apigee Edge API layer",
                "Managed onboarding & support for enterprise partnerships, specializing in API integration & consumption"
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "Nationwide Mutual Insurance Co.",
            startDate: new Date(2022, 8, 1),
            endDate: new Date(2024, 5, 1),
            description: [
                "Developed several frontend web applications for showcasing emerging technology in the industry to the enterprise",
                "Led regular technical conferences with the greater org to showcase emerging technology"
            ]
        },
        {
            role: "Software Engineer",
            company: "Nationwide Mutual Insurance Co.",
            startDate: new Date(2022, 8, 1),
            endDate: new Date(2024, 5, 1),
            description: [
                "Migrated & secured each & every externally facing web domain behind the Akamai content delivery network (CDN) with infrastructure as code (IaC) practices",
                "Onboarded multiple internal development teams to the Akamai CDN"
            ]
        },
        {
            role: "Specialist, IT Service Desk",
            company: "Bowling Green State University",
            startDate: new Date(2019, 2, 1),
            endDate: new Date(2022, 8, 1),
            description: [
                "Provided on-call tech support for students and faculty",
                "Repaired PCs, Macs, and Tablets",
                "Published knowledge base documentation"
            ]
        },
    ];
}
