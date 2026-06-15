/**
 * =============================================================================
 * @description: Logic for the `app-resume` component
 * =============================================================================
 */

import { Component } from "@angular/core";

import { ButtonModule } from 'primeng/button';
import { PdfViewerModule } from "ng2-pdf-viewer";

import { DownloadFile } from "../../services/download-file/download-file"

@Component({
	selector: "app-resume",
	imports: [
		PdfViewerModule,
		ButtonModule
	],
	templateUrl: "./resume.html",
	styleUrl: "./resume.scss",
	standalone: true
})
export class Resume {
	public readonly resumeFilePath: string = "assets/docs/resume.pdf";
	public readonly resumeFilename: string = "BryceNagajResume.pdf"

	/**
	 * @brief Constructor
	 * @description Instantiates an HttpClient and DownloadFile services
	 * @param downloadFileService a DownloadFile object
	 */
	constructor(private downloadFileService: DownloadFile) {}

	/**
	 * @brief Downloads the resume PDF source
	 * @description Downloads the PDF source by means of the DownloadFile service
	 */
	public onDownloadBtnClick() {
		this.downloadFileService.downloadFile(this.resumeFilePath, this.resumeFilename);
	}
}
