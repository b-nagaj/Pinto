/**
 * =============================================================================
 * @description: Logic for the root app component
 * =============================================================================
 */

import { Component, signal, OnInit } from "@angular/core";
import { RouterOutlet, Router } from "@angular/router";

import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

import { Keycap } from "./components/keycap/keycap"
import { Footer } from "./components/footer/footer"

@Component({
    selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
		MenubarModule,
		Keycap,
		Footer
	],
	templateUrl: "./app.html",
	styleUrl: "./app.scss",
})
export class App implements OnInit {
	protected readonly title = signal("pinto");

	public items: MenuItem[] | undefined;

	/**
	 * @brief Constructor
	 * @description Instantiates a new Angular router
	 * @param router a `Router` obj
	 */
	constructor(private router: Router) {}

	/**
	 * @brief Initialization
	 * @description Initializes the list of menu items on the menubar
	 */
	ngOnInit() {
		this.items = [
			{
				label: "Home",
				icon: "pi pi-home",
				command: () => {
					this.router.navigate(['/', 'dashboard']);
				}
			},
			{
				label: "Resume",
				icon: "pi pi-briefcase",
				command: () => {
					this.router.navigate(['/resume'])
				}
			},
			{
				label: "GitHub",
				icon: "pi pi-github",
				url: "https://github.com/b-nagaj"
			},
			{
				label: "Contact",
				icon: "pi pi-envelope",
				url: "mailto:bryce.nagaj@keysight.com"
			}
		]
	}
}
