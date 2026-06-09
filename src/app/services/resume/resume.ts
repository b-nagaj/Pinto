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
				throw new Error('Resume download failed')
			}

			const buffer: ArrayBuffer = await response.arrayBuffer();

			return new Uint8Array(buffer);
		} catch (error: any) {
			console.error("Error inside ResumeService:", error?.message || error);
      		throw error;
		}
	}
}
