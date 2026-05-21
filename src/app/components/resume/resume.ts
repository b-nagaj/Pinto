/**
 * =============================================================================
 * @description: Logic for the `app-resume` component
 * =============================================================================
 */

import { Component } from "@angular/core";

import { PdfViewerModule } from "ng2-pdf-viewer";

@Component({
	selector: "app-resume",
	imports: [PdfViewerModule],
	templateUrl: "./resume.html",
	styleUrl: "./resume.scss",
	standalone: true
})
export class Resume {
	public resumeFilePath = "assets/resume.pdf";
}
