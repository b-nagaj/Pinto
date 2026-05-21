/**
 * =============================================================================
 * @description: Styling for the `app-dashboard-page` component
 * =============================================================================
 */

import { Component, OnInit, Inject, OnDestroy } from "@angular/core";

import { Subscription } from 'rxjs';
import { TerminalModule, TerminalService } from 'primeng/terminal';

@Component({
	selector: "app-dashboard-page",
	imports: [
		TerminalModule
	],
	providers: [TerminalService],
	templateUrl: "./dashboard-page.html",
	styleUrl: "./dashboard-page.scss",
})
export class DashboardPage implements OnDestroy {
	public readonly terminalWelcomeMessage: string =
		"Welcome to Bryce Nagaj's personal portfolio website";
	public readonly terminalPrompt: string = "$";

	private terminalSubscription!: Subscription;

	constructor(private terminalService: TerminalService) {
		this.terminalSubscription = this.terminalService.commandHandler.subscribe((text: string) => {
			let response: string = "";
			let argsIndex: number = text.indexOf(' ');
			let command: string = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

			switch (command.toLowerCase()) {
				case "hello":
					response = "It works";
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
