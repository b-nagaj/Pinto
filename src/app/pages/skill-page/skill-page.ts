/**
 * =============================================================================
 * @description: Logic for the `app-skill-page` component
 * =============================================================================
 */

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common"

import { DividerModule } from "primeng/divider";

import { SkillCard } from "../../components/skill-card/skill-card"

interface SkillCardContent {
	name: string;
	icon: string;
	url: string;
	altName: string;
}

@Component({
	selector: "app-skill-page",
	imports: [
		CommonModule,
		DividerModule,
		SkillCard
	],
	templateUrl: "./skill-page.html",
	styleUrl: "./skill-page.scss",
})
export class SkillPage {
	skillCardContent: SkillCardContent[] = [
		{
			name: "Python",
			icon: "assets/icons/python.svg",
			url: "https://www.python.org",
			altName: "Python"
		},
		{
			name: "C++",
			icon: "assets/icons/cpp.svg",
			url: "https://isocpp.org",
			altName: "C++"
		},
		{
	      	name: 'TypeScript',
	      	icon: 'assets/icons/typescript.svg',
	      	url: 'https://www.typescriptlang.org',
	      	altName: 'TypeScript'
	    },
	    {
	      	name: 'Angular',
	      	icon: 'assets/icons/angular.svg',
	      	url: 'https://angular.dev',
	      	altName: 'Angular Homepage'
	    },
	    {
	      	name: 'Node.js',
	      	icon: 'assets/icons/nodejs.svg',
	      	url: 'https://nodejs.org',
	      	altName: 'Node.js Homepage'
	    }
	]
}
