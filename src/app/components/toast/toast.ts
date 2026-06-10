/**
 * =============================================================================
 * @description Logic for the 'app-toast' component
 * =============================================================================
 */

import { Component } from "@angular/core";

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
	selector: "app-toast",
	imports: [ToastModule],
	templateUrl: "./toast.html",
	styleUrl: "./toast.scss",
})
export class Toast {
	/**
	 * @brief Constructor
	 * @description instantes a message service
	 * @param messageService a MessageService object
	 */
	constructor(private messageService: MessageService) {}

	/**
	 * @brief Displays an error message
	 * @description Displays an error message in the bottom right corner as an
	 *              overlay
	 * @param detail An error message string
	 */
	public showError(detail: string) {
		        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: detail,
            key: 'bl',
            life: 3000
        });
	}
}
