/**
 * =============================================================================
 * @description: Logic for the `app-about` component
 * =============================================================================
 */

import { Component, Inject, OnDestroy } from "@angular/core";

import { Subscription } from 'rxjs';
import { TerminalModule, TerminalService } from 'primeng/terminal';
import { ImageModule } from 'primeng/image';

@Component({
	selector: "app-about",
		imports: [
		TerminalModule,
		ImageModule,
	],
	providers: [
		TerminalService
	],
	templateUrl: "./about.html",
	styleUrl: "./about.scss",
})
export class About implements OnDestroy {
	public readonly profilePicture: string = "https://avatars.githubusercontent.com/u/103980382?s=400&u=da772d66d89b3169c42a5b76b0c5efbc6d474c96&v=4"

	private terminalSubscription!: Subscription;

	/**
	 * @brief Constructor
	 * @description Instantiates a new terminal service
	 * @param a TerminalService object
	 */
	constructor(private terminalService: TerminalService) {
		this.terminalSubscription = this.terminalService.commandHandler.subscribe((text: string) => {
			let response: string = "";
			let argsIndex: number = text.indexOf(' ');
			let command: string = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

			switch (command.toLowerCase()) {
				case "hello":
					response = "Hello! Thanks for stopping by. I'm a senior full-stack software engineer at Keysight Technologies with 5+ years of experience developing secure, reliable, maintainable, and user-friendly software for enterprises. Ay-Ziggy-Zoomba!";
					break;
				default:
					response = `Unknown command: '${command}'`;
			}

			this.terminalService.sendResponse(response);
		});
	}

	/**
	 * @brief Component deconstructor
	 * @description Unsubscribes from the terminal service subscription
	 */
	ngOnDestroy() {
		if (this.terminalSubscription) {
			this.terminalSubscription.unsubscribe();
		}
	}
}
