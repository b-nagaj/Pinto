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
}
