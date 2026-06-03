/**
 * =============================================================================
 * @description Unit testing for the 'Backblaze' service
 * =============================================================================
 */

import { TestBed } from "@angular/core/testing";

import { B2 } from "./backblaze";

describe("B2", () => {
	let service: B2;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(B2);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});
});
