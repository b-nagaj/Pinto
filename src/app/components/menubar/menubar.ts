/**
 * =============================================================================
 * @description Logic for the 'app-menubar' component
 * =============================================================================
 */

import { Component, OnInit } from "@angular/core";
import { RouterOutlet, Router } from "@angular/router";

import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
	selector: "app-menubar",
	imports: [
		RouterOutlet,
		MenubarModule
	],
	templateUrl: "./menubar.html",
	styleUrl: "./menubar.scss",
})
export class Menubar implements OnInit {
	public items: MenuItem[] | undefined;

	/**
	 * @brief Constructor
	 * @description Instantiates a new Angular router
	 * @param router a `Router` object
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
