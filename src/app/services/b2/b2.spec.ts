/**
 * =============================================================================
 * @description Unit testing for the 'B2' service
 * =============================================================================
 */

import { TestBed } from "@angular/core/testing";

import { B2 } from "./b2";

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
