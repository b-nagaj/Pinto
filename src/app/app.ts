/**
 * =============================================================================
 * @description: Logic for the root app component
 * =============================================================================
 */

import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { ToastModule } from 'primeng/toast';

import { Menubar } from "./components/menubar/menubar"
import { Keycap } from "./components/keycap/keycap"
import { Footer } from "./components/footer/footer"
import { Resume } from "./services/resume/resume"

@Component({
    selector: "app-root",
	standalone: true,
	imports: [
		Menubar,
		Keycap,
		Footer,
		RouterOutlet,
		ToastModule
	],
	templateUrl: "./app.html",
	styleUrl: "./app.scss",
})
export class App {
	protected readonly title = signal("pinto");

	/**
	 * @brief Constructor
	 * @description Instantiates the resume service
	 * @param resumeService a Resume object
	 */
	constructor(private resumeService: Resume) {}
}
