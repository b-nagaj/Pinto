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
	 * @brief Constructor
	 * @description Instantiates a new HttpClient
	 * @param an HttpClient object
	 */
	constructor(private http: HttpClient) {}

	/**
	 * @brief Downloads a file onto the user's local machine
	 * @description Downloads a file on the user's local machine by creating
	 *              a hidden link and clicking it to trigger a browser download
	 * @param filePath The path of the file to download, in string format
	 */
	public downloadFile(filePath: string) {
	    this.http.get(filePath, { responseType: 'blob' }).subscribe((data: Blob) => {
	        const downloadUrl: string = window.URL.createObjectURL(data);
	        const link: HTMLAnchorElement = document.createElement('a');
	        link.href = downloadUrl;
	        link.download = 'file.pdf';
	        document.body.appendChild(link);
	        link.click();
	        document.body.removeChild(link);
	      });
	}
}
