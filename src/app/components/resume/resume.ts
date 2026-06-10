/**
 * =============================================================================
 * @description: Logic for the `app-resume` component
 * =============================================================================
 */

import { Component, OnInit } from "@angular/core";
import { NgIf } from "@angular/common"

import { PdfViewerModule } from "ng2-pdf-viewer";
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { DownloadFile } from "../../services/download-file/download-file"
import { Resume as ResumeService } from "../../services/resume/resume"

@Component({
	selector: "app-resume",
	imports: [
		NgIf,
		PdfViewerModule,
		ButtonModule,
		ProgressSpinnerModule
	],
	templateUrl: "./resume.html",
	styleUrl: "./resume.scss",
	standalone: true
})
export class Resume implements OnInit {
	public pdfSrc: Uint8Array | null = null;
	public isLoading: boolean = true;

	/**
	 * @brief Constructor
	 * @description Instantiates an HttpClient and DownloadFile services
	 * @param downloadFileService a DownloadFile object
	 * @param resumeService a ResumeService object
	 * @param toast a Toast object
	 */
	constructor(
		private resumeService: ResumeService,
		private downloadFileService: DownloadFile) {}

	/**
	 * @brief Initialization
	 * @description Coordinates downloading a PDF from a B2 cloud storage bucket
	 */
	ngOnInit() {
		this.loadPdf();
	}

	public async loadPdf(): Promise<void> {
		try {
			this.isLoading = true;
			const pdfBytes: Uint8Array = await this.resumeService.downloadResume();
			this.pdfSrc = pdfBytes;
		} catch (error: any) {
      		console.error("B2 PDF initialization error: ", error);
		} finally {
			this.isLoading = false;
		}
	}

	/**
	 * @brief Downloads the resume PDF source
	 * @description Downloads the PDF source by means of the DownloadFile service
	 */
	// public onDownloadBtnClick() {
	// 	this.downloadFileService.downloadFile(this.resumeFilePath, this.resumeFilename);
	// }
}
