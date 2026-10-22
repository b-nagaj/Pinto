/**
 * =============================================================================
 * @description Logic for the 'app-menubar' component
 * =============================================================================
 */

import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";

import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
	selector: "app-menubar",
	imports: [
		MenubarModule
	],
	templateUrl: "./menubar.html",
	styleUrl: "./menubar.scss",
})
export class Menubar implements OnInit {
	public readonly fsfBadge: string = "assets/badges/fsfBadge.png"

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
				label: "About",
				icon: "pi pi-user",
				badge: "Alt+A",
				command: () => {
					this.router.navigate(['/', 'about']);
				}
			},
			{
				label: "Skills",
				icon: "pi pi-hammer",
				badge: "Alt+S",
				command: () => {
					this.router.navigate(['/', 'skills'])
				}
			},
			{
				label: "Experience",
				icon: "pi pi-trophy",
				badge: "Alt+E",
				command: () => {
					this.router.navigate(['/', 'experience'])
				}
			},
			{
				label: "Resume",
				icon: "pi pi-briefcase",
				badge: "Alt+R",
				command: () => {
					this.router.navigate(['/', 'resume'])
				}
			},
			{
				label: "Adventureland",
				icon: "pi pi-server",
				badge: "Alt+M",
				command: () => {
					this.router.navigate(['/', 'adventureland'])
				}
			},
			{
				label: "GitHub",
				icon: "pi pi-github",
				badge: "Alt+G",
				url: "https://github.com/b-nagaj"
			},
			{
				label: "Contact",
				icon: "pi pi-envelope",
				badge: "Alt+C",
				url: "mailto:bryce.nagaj@keysight.com"
			},
		]
	}

	// Navigation handlers
	  goToAbout() { this.router.navigate(['/', 'about']); }
	  goToSkills() { this.router.navigate(['/', 'skills']); }
	  goToExperience() { this.router.navigate(['/', 'experience']); }
	  goToResume() { this.router.navigate(['/', 'resume']); }
	  goToAdventureland() { this.router.navigate(['/', 'adventureland']); }
	  openGitHub() { window.open('https://github.com/b-nagaj', '_blank'); }
	  openContact() { window.location.href = 'mailto:bryce.nagaj@keysight.com'; }

	  // Global Key Listener
	  @HostListener('document:keydown', ['$event'])
	  handleKeyboardEvent(event: KeyboardEvent) {
	    if (!event.altKey) return;

	    switch (event.key.toLowerCase()) {
	      case 'a':
	        event.preventDefault();
	        this.goToAbout();
	        break;
	      case 'e':
	      	event.preventDefault();
	      	this.goToExperience();
	      	break;
	      case 's':
	      	event.preventDefault();
	      	this.goToSkills();
	      	break;
	      case 'r':
	        event.preventDefault();
	        this.goToResume();
	        break;
	      case 'm':
	      	event.preventDefault();
	      	this.goToAdventureland();
	      	break;
	      case 'g':
	        event.preventDefault();
	        this.openGitHub();
	        break;
	      case 'c':
	        event.preventDefault();
	        this.openContact();
	        break;
	    }
	  }
}
