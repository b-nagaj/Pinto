/**
 * =============================================================================
 * @description Logic for the 'Resume' service
 * =============================================================================
 */

import { Injectable } from "@angular/core";

import { environment } from "../../../environments/environment"
import { Toast } from "../toast/toast"

@Injectable({
	providedIn: "root",
})
export class Resume {
	/**
	 * @brief Constructor
	 * @description Instantiates a Toast object
	 * @param toastService a Toast object
	 */
	constructor(private toastService: Toast) {}

	/**
	 * @brief Downloads a PDF
	 * @description Read a PDF from a Backblaze cloud storage bucket into a byte
	 *              array by calling Basil's `/resume/download` endpoint
	 * @return Uint8Array
	 */
	public async downloadResume(): Promise<Uint8Array> {
		const downloadUrl = `${environment.basilUrl}/resume/download`;

		try {
			const response: any = await fetch(downloadUrl, {
				method: "GET",
				headers: {
					"Accept": "application/pdf"
				}
			});

			if (!response.ok) {
				const errorMessage: string = "Failed to download resume from Backblaze";

				console.error(errorMessage);

			}

			const buffer: ArrayBuffer = await response.arrayBuffer();

			return new Uint8Array(buffer);
		} catch (error: any) {
			console.error("Error inside ResumeService:", error?.message || error);
      		throw error;
		}
	}
}
