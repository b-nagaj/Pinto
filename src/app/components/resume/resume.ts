/**
 * =============================================================================
 * @description: Logic for the `app-resume` component
 * =============================================================================
 */

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AsyncPipe } from "@angular/common";

import { Observable, catchError, of } from "rxjs";
import { RemarkModule } from 'ngx-remark';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
	selector: "app-resume",
	imports: [
		RemarkModule,
		AsyncPipe,
		ProgressSpinnerModule
	],
	templateUrl: "./resume.html",
	styleUrl: "./resume.scss",
})
export class Resume implements OnInit {
	public markdownContent$!: Observable<string>;

	/**
	 * @brief Constructor
	 * @description Instantiates a new HttpClient
	 * @param http an HttpClient object
	 */
	constructor(private http: HttpClient) {}

	/**
	 * @brief Initialization
	 * @description Coordinates loading a local markdown resume
	 */
	ngOnInit() {
		const resumeFilePath: string = "assets/resume.md";

		this.markdownContent$ = this.http.get(resumeFilePath, { responseType: "text" }).pipe(
			catchError((err) => {
				console.error("Error loading markdown file:", err);
				return of("# Error\nUnable to load the requested document.");
			})
		);
	}
}
