/**
 * =============================================================================
 * @description Unit testing for the 'DownloadFile' service
 * =============================================================================
 */

import { TestBed } from "@angular/core/testing";

import { DownloadFile } from "./download-file";

describe("DownloadFile", () => {
	let service: DownloadFile;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(DownloadFile);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
