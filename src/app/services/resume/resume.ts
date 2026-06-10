/**
 * =============================================================================
 * @description Logic for the 'Resume' service
 * =============================================================================
 */

import { Injectable } from "@angular/core";

import { environment } from "../../../environments/environment"

@Injectable({
	providedIn: "root",
})
export class Resume {
	private resumePromise: Promise<Uint8Array> | null = null;

	/**
	 * @brief Coordinates fetching a resume
	 * @description Eagerly fetches a resume PDF from a Backblaze cloud storage
	 *              bucket
	 */
	constructor() {
		this.preloadResume();
	}

	/**
	 * @brief Pre-loads a PDF document
	 * @description Siliently initiates the download process and caches the
	 *              promise chain
	 */
	public preloadResume() {
		if (!this.resumePromise) {
			this.resumePromise = this.downloadResume();
		}
	}

	/**
	 * @brief Exposes PDF document cache
	 * @description Exposes the cached PDF byte array to consumers
	 * @return Uint8Array
	 */
	public async cacheResume() {
		if (!this.resumePromise) {
			this.preloadResume();
		}

		return this.resumePromise;
	}

	/**
	 * @brief Downloads a PDF document
	 * @description Reads a PDF from a Backblaze cloud storage bucket into a byte
	 *              array by calling Basil's `/resume/download` endpoint
	 * @return Uint8Array
	 */
	public async downloadResume(): Promise<Uint8Array> {
		const downloadUrl = `${environment.basilUrl}/resume/download`;

		var errorMessage: string = "";

		try {
			const response: any = await fetch(downloadUrl, {
				method: "GET",
				headers: {
					"Accept": "application/pdf"
				}
			});

			if (!response.ok) {
				let backendError: string = "Unknown backend processing error occurred";

				try {
					const errorText: string = await response.text();
					const errorJson: any = JSON.parse(errorText);
					backendError = errorJson.message || errorText;
				}
				catch (error: any) {
					backendError = `HTTP status ${response.status}: ${response.statusText}`;
				}

				const frontendMessage: string = `Failed to download resume from Backblaze\nBackend reported: "${backendError}"`;
				console.error(frontendMessage);

				throw new Error(frontendMessage);
			}

			const buffer: ArrayBuffer = await response.arrayBuffer();

			if (buffer.byteLength == 0) {
				errorMessage = "Payload from Backblaze contains 0 bytes";
				console.error(errorMessage);

				throw new Error(errorMessage);
			}

			return new Uint8Array(buffer);
		} catch (error: any) {
			if (error instanceof Error) {
				errorMessage = "Backend processing error inside 'ResumeService'\nError: " + error.message
	        } else {
	        	errorMessage = "Network or structural error inside ResumeService:" + error;
	        }

	        throw error;
		}
	}
}
