/**
 * =============================================================================
 * @description Unit testing for the 'Backblaze' service
 * =============================================================================
 */

import { TestBed } from "@angular/core/testing";

import { Backblaze } from "./backblaze";

describe("Backblaze", () => {
	let service: Backblaze;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(Backblaze);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
