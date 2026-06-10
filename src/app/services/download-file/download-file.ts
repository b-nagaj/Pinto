/**
 * =============================================================================
 * @description Downloads a file onto the user's local machine
 * =============================================================================
 */

import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: "root",
})
export class DownloadFile {
	/**
	 * @brief Downloads a file onto the user's machine
	 * @description Downloads a file on the user's local machine by creating
	 *              a hidden link and clicking it to trigger a browser download
	 * @param bytes a Byte array that represents the file
	 * @param fileName The name of the downloaded asset, in string format
	 */
	public downloadFile(bytes: Uint8Array, fileName: string) {
		if (!bytes || bytes.length == 0) {
			console.error("Failed to download file\nError: Byte payload is missing or empty");

			return;
		}

		const blob = new Blob([bytes as BlobPart], { type: "application/pdf" });
		const downloadUrl: string = window.URL.createObjectURL(blob);
		const link: HTMLAnchorElement = document.createElement('a');
		link.href = downloadUrl;
		link.download = fileName;
		document.body.appendChild(link);
		link.click();

		document.body.removeChild(link);
		window.URL.revokeObjectURL(downloadUrl);
	}
}
