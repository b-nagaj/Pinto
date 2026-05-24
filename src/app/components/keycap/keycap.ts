/**
 * =============================================================================
 * @description Logic for the 'Keycap' component
 * =============================================================================
 */

import { Component, input } from "@angular/core";
import { RouterOutlet, Router } from "@angular/router";

@Component({
    selector: "app-keycap",
    standalone: true,
    imports: [
        RouterOutlet
    ],
    templateUrl: "./keycap.html",
    styleUrl: "./keycap.scss",
})
export class Keycap {
    public pathToIcon = input.required<string>();
    public alt = input.required<string>();
    public key = input.required<string>();
    public route = input<string>("");
    public url = input<string>("");

    /**
     * @brief Constructor
     * @description Instantiates a new router
     * @param router a Router object
     */
    constructor(private router: Router) {}

    /**
     * @brief Keyboard shortcut
     * @description Wires up the `clickKeycap()` event handler to a keyboard
     *              shortcut
     */
    public handleKeyDown(event: KeyboardEvent) {
        if (event.key.toLowerCase() === this.key().toLowerCase()) {
            this.clickKeycap();
        }
    }

    /**
     * @brief Event handler keyboard shortcuts
     * @descripton Navigates to either an internal route or an external web link
     *             based on input parameters
     */
    public clickKeycap() {
        if (this.route()) {
            this.router.navigate([this.route()]);
        }
        else if (this.url()) {
            window.open(this.url(), "_blank", "noopener,noreferrer");
        }
    }
}
